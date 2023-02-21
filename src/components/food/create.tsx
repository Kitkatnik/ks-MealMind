import React from "react";
import { 
    useTranslate, 
    useApiUrl, 
    HttpError 
} from "@pankod/refine-core";
import {
	Controller,
	UseModalFormReturnType,
    useForm
} from "@pankod/refine-react-hook-form";
import {
	Drawer,
	FormControlLabel,
	Input,
	Radio,
	RadioGroup,
	Avatar,
	Typography,
	FormLabel,
	Stack,
	Box,
	IconButton,
	FormControl,
	Autocomplete,
	OutlinedInput,
	InputAdornment,
	FormHelperText,
	Create,
	useAutocomplete,
	TextField,
} from "@pankod/refine-mui";
import { CloseOutlined } from "@mui/icons-material";

import { ICategory, IFoods } from "../../interfaces";

export const CreateFood: React.FC<
	UseModalFormReturnType<IFoods, HttpError, IFoods>
> = ({
	watch,
	setValue,
	register,
	formState: { errors },
	control,
	refineCore: { queryResult, onFinish },
	handleSubmit,
	modal: { visible, close },
	saveButtonProps,
}) => {
    const foodsData = queryResult?.data?.data;

	const { autocompleteProps } = useAutocomplete({
		resource: "categories",
        defaultValue: foodsData?.category_id,
	});

	const imageInput = watch("food_image");

	const onChangeHandler = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const formData = new FormData();

		const target = event.target;
		const file: File = (target.files as FileList)[0];

		formData.append("file", file);

		// const res = await axios.post<{ url: string }>(
		// 	`${apiUrl}/media/upload`,
		// 	formData,
		// 	{
		// 		withCredentials: false,
		// 		headers: {
		// 			"Access-Control-Allow-Origin": "*",
		// 		},
		// 	}
		// );

		const { name, size, type, lastModified } = file;

		// eslint-disable-next-line
		// const imagePaylod: any = [
		// 	{
		// 		name,
		// 		size,
		// 		type,
		// 		lastModified,
		// 		url: res.data.url,
		// 	},
		// ];

		// setValue("images", imagePaylod, { shouldValidate: true });
	};

	return (
		<Drawer
			sx={{ zIndex: "1301" }}
			PaperProps={{ sx: { width: { sm: "100%", md: 500 } } }}
			open={visible}
			onClose={close}
			anchor="right"
		>
			<Create
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
						<form onSubmit={handleSubmit(onFinish)}>
							<FormControl sx={{ width: "100%" }}>
								<FormLabel>{"Image"}</FormLabel>
								<Stack
									display="flex"
									alignItems="center"
									border="1px dashed  "
									borderColor="primary.main"
									borderRadius="5px"
									padding="10px"
									marginTop="5px"
								>
									<label htmlFor="images-input">
										<Input
											id="images-input"
											type="file"
											sx={{
												display: "none",
											}}
											onChange={onChangeHandler}
										/>
										<input
											id="file"
											{...register("food_image")}
											type="hidden"
										/>
										<Avatar
											sx={{
												cursor: "pointer",
												width: {
													xs: 100,
													md: 180,
												},
												height: {
													xs: 100,
													md: 180,
												},
											}}
											src={imageInput}
											alt="Food Image"
										/>
									</label>
									<Typography
										variant="body2"
										style={{
											fontWeight: 800,
											marginTop: "8px",
										}}
									>
										{"Add Food Picture"}
									</Typography>
									<Typography style={{ fontSize: "12px" }}>
                                        {"Must be 1080x1080 px"}
									</Typography>
								</Stack>
								{errors.food_image && (
									<FormHelperText error>{errors.food_image.message}</FormHelperText>
								)}
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
										<FormHelperText error>{errors.food_name.message}</FormHelperText>
									)}
								</FormControl>
                                <FormControl>
									<Controller
										control={control}
										name="category_id"
										rules={{
											required: "This field is required."
										}}
										render={({ field }) => (
											<Autocomplete
												disablePortal
												{...autocompleteProps}
												{...field}
												onChange={(_, value) => {
													field.onChange(value);
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
									<OutlinedInput
										id="rating"
										{...register("rating", {
											required: "This field is required",
											valueAsNumber: true,
										})}
										style={{ height: "40px" }}
										inputProps={{ inputMode: "numeric", pattern: "[1-5]*" }}
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
							</Stack>
						</form>
					</Box>
				</Stack>
			</Create>
		</Drawer>
	);
};
