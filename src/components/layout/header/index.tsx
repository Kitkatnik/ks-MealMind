import React, { useState, useEffect, useContext } from "react";
import { useList, useGetIdentity } from "@pankod/refine-core";

import {
	AppBar,
	IconButton,
	Link,
	Avatar,
	Typography,
	TextField,
	Toolbar,
	Box,
	Autocomplete,
	useAutocomplete,
	Stack,
	FormControl,
	MenuItem,
	Select,
} from "@pankod/refine-mui";
import {
	SearchOutlined,
	DarkModeOutlined,
	LightModeOutlined,
} from "@mui/icons-material";

import { IFoods } from "../../../interfaces";
import { ColorModeContext } from "@contexts";

interface IOptions {
	label: string;
	link: string;
	// category: string;
}

export const Header: React.FC = () => {
	const { data: user } = useGetIdentity();

	const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.
	const { mode, setMode } = useContext(ColorModeContext);

	const [value, setValue] = useState("");
	const [options, setOptions] = useState<IOptions[]>([]);

	const { refetch: refetchFoods } = useList<IFoods>({
		resource: "foods",
		config: {
			filters: [{ field: "food_name", operator: "contains", value }],
		},
		queryOptions: {
			enabled: false,
			onSuccess: (data) => {
				const foodOptionGroup = data.data.map((item) => {
					return {
						label: `${item.food_name}`,
						link: `/foods/show/${item.id}`,
						// category: "Foods",
					};
				});
				if (foodOptionGroup.length > 0) {
					setOptions((prevOptions) => [...prevOptions, ...foodOptionGroup]);
				}
			},
		},
	});

  // TODO: Add Meal Plan search with string (date? meal_food?)

	// const { refetch: refetchMealPlans } = useList<IMealPlans>({
	// 	resource: "meal_plans",
	// 	config: {
	// 		filters: [{ field: "meal_food", operator: "contains", value }],
	// 	},
	// 	queryOptions: {
	// 		enabled: false,
	// 		onSuccess: (data) => {
	// 			const mealPlanOptionGroup = data.data.map((item) => {
	// 				return {
	// 					label: `${item.date}`,
	// 					link: `/mealplans/show/${item.id}`,
	// 					category: "MealPlans",
	// 				};
	// 			});
	// 			if (mealPlanOptionGroup.length > 0) {
	// 				setOptions((prevOptions) => [...prevOptions, ...mealPlanOptionGroup]);
	// 			}
	// 		},
	// 	},
	// });

	useEffect(() => {
		setOptions([]);
		refetchFoods();
		// refetchMealPlans();
	}, [value]);

	return shouldRenderHeader ? (
		<AppBar color="default" position="sticky" elevation={1}>
			<Toolbar>
				<Stack
					direction="row"
					width="100%"
					justifyContent="space-between"
					alignItems="center"
				>
					<Stack direction="row" flex={1}>
						<Autocomplete
							sx={{
								maxWidth: 550,
							}}
							id="search-autocomplete"
							options={options}
							filterOptions={(x) => x}
							disableClearable
							freeSolo
							fullWidth
							size="small"
							onInputChange={(event, value) => {
								if (event?.type === "change") {
									setValue(value);
								}
							}}
							// groupBy={(option) => option.category}
							renderOption={(props, option: IOptions) => {
								return (
									<Link href={option.link} underline="none">
										<Box
											{...props}
											component="li"
											sx={{
												display: "flex",
												padding: "10px",
												alignItems: "center",
												gap: "10px",
											}}
										>
											<Typography
												sx={{
													fontSize: {
														md: "14px",
														lg: "16px",
													},
												}}
											>
												{option.label}
											</Typography>
										</Box>
									</Link>
								);
							}}
							renderInput={(params) => {
								return (
									<Box
										position="relative"
										sx={{
											display: {
												xs: "none",
												sm: "block",
											},
										}}
									>
										<TextField
											{...params}
											label="Search"
											InputProps={{
												...params.InputProps,
											}}
										/>
										<IconButton
											sx={{
												position: "absolute",
												right: 0,
												top: 0,
												"&:hover": {
													backgroundColor: "transparent",
												},
											}}
										>
											<SearchOutlined />
										</IconButton>
									</Box>
								);
							}}
						/>
					</Stack>
					<Stack direction="row" alignItems="center">
						<IconButton
							onClick={() => {
								setMode();
							}}
						>
							{mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
						</IconButton>
						<Stack
							direction="row"
							gap="4px"
							alignItems="center"
							justifyContent="center"
						>
							<Typography variant="subtitle2">{user?.name}</Typography>
							<Avatar src={user?.avatar} alt={user?.name} />
						</Stack>
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	) : null;
};
