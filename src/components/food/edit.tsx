import React, { useState } from "react";
import {
	Controller,
	UseModalFormReturnType,
	useForm,
} from "@pankod/refine-react-hook-form";
import { useList, HttpError, useGetIdentity, useSelect } from "@pankod/refine-core";

import {
	Form,
	Space,
	Upload,
	getValueFromEvent,
	RcFile,
} from "@pankod/refine-antd";
import {
	Drawer,
	FormControlLabel,
	Avatar,
	Typography,
	FormLabel,
	Stack,
	Box,
	IconButton,
	FormControl,
	Autocomplete,
	OutlinedInput,
	FormHelperText,
	Edit,
	useAutocomplete,
	TextField,
} from "@pankod/refine-mui";
import { CloseOutlined } from "@mui/icons-material";

import { StyledRating, IconContainer, customIcons } from "../ratings";
import { ICategory, IFoods } from "../../interfaces";
import { supabaseClient, normalizeFile } from "../../utility";

export const EditFood: React.FC<
	UseModalFormReturnType<IFoods, HttpError, IFoods>
> = ({
	watch,
	setValue,
	getValues,
	register,
	formState: { errors },
	control,
	refineCore: { queryResult, onFinish },
	handleSubmit,
	modal: { visible, close },
	saveButtonProps,
}) => {

	const { formProps } = useForm<IFoods>()

	const foodsData = queryResult?.data?.data;
	const { data: foodsList } = useList<IFoods, HttpError>({
		resource: "foods",
	});

	const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
        defaultValue: foodsData?.category_id,
    });

    const handleRefresh = () => {
        queryResult?.refetch();
    };

	const { data: identity } = useGetIdentity<{ id: number; fullName: string }>();
	const userId = foodsList?.data[0].added_by ?? 0;
	const userIdAuth = identity?.id ?? 0;

	const { autocompleteProps } = useAutocomplete<ICategory>({
		resource: "categories",
		defaultValue: foodsData?.category_id.id,
	});

	const imageInput = watch("food_image");
	const [imagePreview, setImagePreview] = useState("");

	const ImageWithFallBack = () => {
		// console.log("image input: ", imageInput)
		// console.log("imagePreview: ", imagePreview)
		// console.log(foodsList?.data)
		if (imagePreview.length !== 0 && imagePreview !== undefined) {
			const ImageContainer = () => {
				return (
					<div
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Avatar
							style={{
								width: 200,
								height: 200,
								borderRadius: 200 / 2,
							}}
							src={imagePreview}
							alt="Store Location"
						/>
					</div>
				);
			};
			return <ImageContainer />;
		} else {
			console.log("other");
			return (
				<Avatar
					style={{
						width: "100%",
						height: "100%",
						maxWidth: "256px",
						maxHeight: "256px",
					}}
					src="/upload_food_default.png"
					alt="Store Location"
				/>
			);
		}
	};

	return (
		<Drawer
			sx={{ zIndex: "1301" }}
			PaperProps={{ sx: { width: { sm: "100%", md: 500 } } }}
			open={visible}
			onClose={close}
			anchor="right"
		>
			<Edit
				saveButtonProps={saveButtonProps}
				cardHeaderProps={{
					avatar: (
						<IconButton
							onClick={() => close()}
							sx={{
								width: "30px",
								height: "30px",
								mb: "5px",
							}}
						>
							<CloseOutlined />
						</IconButton>
					),
					action: null,
				}}
				cardProps={{ sx: { overflowY: "scroll", height: "100vh" } }}
			>
				<Stack>
					<Box
						paddingX="50px"
						justifyContent="center"
						alignItems="center"
						sx={{
							paddingX: {
								xs: 1,
								md: 6,
							},
						}}
					>
						<form {...formProps} onSubmit={handleSubmit(onFinish)}>
							<FormControl sx={{ width: "100%" }}>
								<FormLabel>{"Image"}</FormLabel>
								<Form.Item
									name="images"
									valuePropName="fileList"
									getValueFromEvent={getValueFromEvent}
									normalize={normalizeFile}
									noStyle
								>
									<Upload.Dragger
										name="file"
										listType="picture"
										maxCount={1}
										customRequest={async ({
											file,
											onError,
											onSuccess,
										}) => {
											const rcFile = file as RcFile;
											const fileUrl = `${userId}/${rcFile.name}`;

											const { error } = await supabaseClient.storage
												.from("foods")
												.upload(fileUrl, file, {
													cacheControl: "3600",
													upsert: true,
												});

											if (error) {
												return onError?.(error);
											}
											const { data, error: urlError } =
												await supabaseClient.storage
													.from("foods")
													.getPublicUrl(fileUrl);

											if (urlError) {
												return onError?.(urlError);
											}

											onSuccess?.(
												{ url: data?.publicUrl },
												new XMLHttpRequest(),
											);
										}}
									>
										<Space direction="vertical" size={2}>
											<ImageWithFallBack />
											<Typography
												style={{
													fontWeight: 800,
													fontSize: "16px",
													marginTop: "8px",
												}}
											>
												{"Add product picture"}
											</Typography>
											<Typography style={{ fontSize: "12px" }}>
												{"Must be 1080x1080 px"}
											</Typography>
										</Space>
									</Upload.Dragger>
								</Form.Item>
							</FormControl>
							<Stack gap="10px" marginTop="10px">
								<FormControl>
									<FormLabel required>{"Name"}</FormLabel>
									<OutlinedInput
										id="name"
										{...register("food_name", {
											required: "This field is required.",
										})}
										style={{ height: "40px" }}
									/>
									{errors.food_name && (
										<FormHelperText error>
											{errors.food_name.message}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<Controller
										control={control}
										name="category_id"
										rules={{
											required: "This field is required.",
										}}
										render={({ field }) => (
											<Autocomplete
												disablePortal
												{...autocompleteProps}
												{...field}
												onChange={(_, value) => {
													field.onChange(value?.id);
												}}
												getOptionLabel={(item) => {
													return item.title ? item.title : "";
												}}
												isOptionEqualToValue={(option, value) =>
													value === undefined || option.id === value.id
												}
												renderInput={(params) => (
													<TextField
														{...params}
														margin="dense"
														label="Category"
														variant="outlined"
														error={!!errors.category_id?.message}
														required
													/>
												)}
											/>
										)}
									/>
									{errors.category_id && (
										<FormHelperText error>
											{errors.category_id.message}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<FormLabel required>{"Rating"}</FormLabel>
									<StyledRating
										{...register("rating")}
										value={getValues("rating")}
										onChange={(event) => {
											setValue("rating", Number(event.target.value));
										}}
										name="highlight-selected-only"
										IconContainerComponent={IconContainer}
										getLabelText={(value: number) => customIcons[value].label}
										highlightSelectedOnly
									/>
									{errors.rating && (
										<FormHelperText error>
											{errors.rating.message}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<FormLabel>{"Eating Location"}</FormLabel>
									<OutlinedInput
										id="name"
										{...register("location")}
										style={{ height: "40px" }}
									/>
									{errors.location && (
										<FormHelperText error>
											{errors.location.message}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<FormLabel>{"Purchase Location"}</FormLabel>
									<OutlinedInput
										id="name"
										{...register("purchase_at")}
										style={{ height: "40px" }}
									/>
									{errors.purchase_at && (
										<FormHelperText error>
											{errors.purchase_at.message}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<FormLabel>{"Notes"}</FormLabel>
									<OutlinedInput
										id="notes"
										{...register("notes")}
										multiline
										minRows={5}
										maxRows={5}
									/>
									{errors.notes && (
										<FormHelperText error>
											{errors.notes.message}
										</FormHelperText>
									)}
								</FormControl>
								<FormControl>
									<input
										type="hidden"
										{...register("added_by")}
										defaultValue={`${userId}`}
									/>
									<input
										type="hidden"
										{...register("added_by_auth")}
										defaultValue={userIdAuth}
									/>
								</FormControl>
							</Stack>
						</form>
					</Box>
				</Stack>
			</Edit>
		</Drawer>
	);
};
