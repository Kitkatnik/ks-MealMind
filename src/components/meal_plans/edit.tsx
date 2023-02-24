import React, { useState } from "react";
import {
	Controller,
	UseModalFormReturnType,
} from "@pankod/refine-react-hook-form";
import { useList, useForm, HttpError, useGetIdentity } from "@pankod/refine-core";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs'
import objectSupport from "dayjs/plugin/objectSupport";
dayjs.extend(objectSupport);

// TODO: Build meal plan edit features

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

import { IMealPlans, IUser } from "../../interfaces";

export const EditMealPlan: React.FC<
	UseModalFormReturnType<IMealPlans, HttpError, IMealPlans>
> = ({
	watch,
	register,
	formState: { errors },
	control,
	refineCore: { queryResult, onFinish },
	handleSubmit,
	modal: { visible, close },
	saveButtonProps,
}, {rowId}) => {

	// console.log("PARAM======")
	// console.log("mealID: ", mealId)

	// const { data: curr } = queryResult;
	// console.log(curr)

	const { data: mealPlansList } = useList<IMealPlans, HttpError>({
		resource: "meal_plans",
	});
	// console.log(mealPlansList)
	const { data: identity } = useGetIdentity<{ id: number; fullName: string }>();

	const userId = mealPlansList?.data[0]?.added_by ?? 0;
	const userIdAuth = identity?.id ?? 0;

	const [value, setValue] = React.useState();

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
									</LocalizationProvider>
								</FormControl>
                                <FormControl>
								<input
										type="hidden"
										{...register("date")}
										defaultValue={`${dayjs(value).format("YYYY-MM-DD")}`}
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
			</Edit>
		</Drawer>
	);
};