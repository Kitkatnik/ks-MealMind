import React, { useState } from "react";
import {
	Controller,
	UseModalFormReturnType,
} from "@pankod/refine-react-hook-form";
import { useList, HttpError, useGetIdentity } from "@pankod/refine-core";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs'
import objectSupport from "dayjs/plugin/objectSupport";
dayjs.extend(objectSupport);

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
	Create,
	useAutocomplete,
	TextField,
} from "@pankod/refine-mui";
import { CloseOutlined } from "@mui/icons-material";

import { IMealPlans, IUser } from "../../interfaces";

export const CreateMealPlan: React.FC<
	UseModalFormReturnType<IMealPlans, HttpError, IMealPlans>
> = ({
	register,
	formState: { errors },
	refineCore: { queryResult, onFinish },
	handleSubmit,
	modal: { visible, close },
	saveButtonProps,
}) => {

	const { data: mealPlansList } = useList<IMealPlans, HttpError>({
		resource: "meal_plans",
	});
	const { data: identity } = useGetIdentity<{ id: number; fullName: string }>();

	const userIdAuth = identity?.id ?? 0;

	const { data: userDataResults } = useList<IUser>({
		resource: "profiles"
	});
	const userId = userDataResults?.data[0]?.id

	const [value, setValue] = React.useState();

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
							<Stack gap="10px" marginTop="10px">
								<FormControl>
									<FormLabel required>{"Meal Plan Date"}</FormLabel>
									<LocalizationProvider 
										dateAdapter={AdapterDayjs}
									>
										<StaticDatePicker
											displayStaticWrapperAs="desktop"
											openTo="year"
											value={value}
											onChange={(newValue) => {
												console.log("TYPE OF NEW VALUE: ",typeof newValue);
												if (newValue !== null && newValue !== undefined) {
													setValue(newValue);
												}
											}}
											renderInput={(params) => <TextField {...params} />}
										/>

										{/* <StyledRating
										{...register("rating")}
										value={getValues("rating")}
										onChange={(_, value: number | null) => {
											setValue("rating", Number(value));
										}}
										name="highlight-selected-only"
										IconContainerComponent={IconContainer}
										// getLabelText={(value: number) => customIcons[value].label}
										highlightSelectedOnly
										max={5}
									/> */}
									</LocalizationProvider>
								</FormControl>
                                <FormControl>
								<input
										type="hidden"
										{...register("date")}
										defaultValue={`${dayjs(value).format("YYYY-MM-DD")}`} // eslint-disable-line
									/>
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
			</Create>
		</Drawer>
	);
};