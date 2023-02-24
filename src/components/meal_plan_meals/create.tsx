import React, { useState } from "react";
import { useList, HttpError, useGetIdentity, useTable } from "@pankod/refine-core";
import {
	Controller,
	UseModalFormReturnType,
} from "@pankod/refine-react-hook-form";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import * as dayjs from 'dayjs'
import * as objectSupport from "dayjs/plugin/objectSupport";
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
    RadioGroup,
    Radio
} from "@pankod/refine-mui";
import { CloseOutlined } from "@mui/icons-material";

import { IMealPlanMeals, IFoods } from "../../interfaces";

export const CreateMealPlanMeal: React.FC<
	UseModalFormReturnType<IMealPlanMeals, HttpError, IMealPlanMeals>
> = ({
	register,
    control,
	formState: { errors },
	refineCore: { queryResult, onFinish },
	handleSubmit,
	modal: { visible, close },
	saveButtonProps,
}) => {

    const { data: foodsList } = useList<IFoods, HttpError>({
        resource: "foods",
    });

    const { autocompleteProps } = useAutocomplete<IFoods>({
        resource: "foods",
        defaultValue: foodsList?.food_id
    });

	const { data: mealPlansList } = useList<IMealPlanMeals, HttpError>({
		resource: "meal_plans",
	});

	const { data: identity } = useGetIdentity<{ id: number; fullName: string }>();

    const mealPlanId = mealPlansList?.data[0].id ?? 0;
	const userId = mealPlansList?.data[0].added_by ?? 0;
	const userIdAuth = identity?.id ?? 0;

	const [foodValue, setFoodValue] = React.useState();
    const [periodValue, setPeriodValue] = React.useState();

	return (
		<Drawer
			sx={{ zIndex: "1301" }}
			PaperProps={{ sx: { width: { sm: "100%", md: 500 } } }}
			open={visible}
			onClose={close}
			anchor="right"
            >
			<Create
                breadcrumb={false}
                title={<Typography variant="h5">Add A Meal</Typography>}
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
									<Controller
										control={control}
										name="food_id"
										rules={{
											required: "This field is required.",
										}}
										render={({ field }) => (
											<Autocomplete
												disablePortal
												{...autocompleteProps}
												{...field}
												onChange={(_, foodValue) => {
													field.onChange(foodValue?.id);
												}}
												getOptionLabel={(item) => {
													return item.food_name ? item.food_name : "";
												}}
												isOptionEqualToValue={(option, foodValue) =>
													foodValue === undefined || option.id === foodValue.id
												}
												renderInput={(params) => (
													<TextField
														{...params}
														margin="dense"
														label="Meal"
														variant="outlined"
														error={!!errors.food_id?.message}
														required
													/>
												)}
											/>
										)}
									/>
									{errors.food_id && (
										<FormHelperText error>
											{errors.food_id.message}
										</FormHelperText>
									)}
								</FormControl>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Time of Day</FormLabel>
                                    <RadioGroup
                                        {...register("period")}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        onChange={(_, value) => {
                                            setPeriodValue(value)
                                            console.log(value);
                                        }}
                                    >
                                        <FormControlLabel {...register("period")} value={1} control={<Radio />} label="Morning" />
                                        <FormControlLabel {...register("period")} value={2} control={<Radio />} label="Afternoon" />
                                        <FormControlLabel {...register("period")} value={3} control={<Radio />} label="Evening" />
                                    </RadioGroup>
                                    </FormControl>
                                <FormControl>
                                    <input
										type="hidden"
										{...register("meal_plan_id")}
										defaultValue={mealPlanId}
									/>
                                    <input
										type="hidden"
										{...register("period")}
										defaultValue={Number(periodValue)}
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

// Date (hidden and from previous stuff)
// Food choice
// Period of time (Morning Afternoon Night -- 1, 2, 3 radio group??)



/*

    NEED                CURRENT
    added_by            
    added_by_auth
    date
    food_id             food_name       4
    period              NA


*/