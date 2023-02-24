import React from "react";
import {
    HttpError,
    IResourceComponentsProps,
    useShow,
    useSelect,
    useGetIdentity,
} from "@pankod/refine-core";
import { useForm, Controller, useModalForm } from "@pankod/refine-react-hook-form";

import {
    Avatar,
    DataGrid,
    Grid,
    GridColumns,
    List,
    Paper,
    Stack,
    Typography,
    useDataGrid,
    Button,
    Tooltip,
    Rating,
    useAutocomplete,
    Autocomplete,
    TextField,
    Box,
    Create,
    FormControl, 
    CreateButton,
    Show
} from "@pankod/refine-mui";
import {
    LocalPhoneOutlined,
    MapOutlined,
    DirectionsCarFilledOutlined,
    EmailOutlined,
    AccountBalanceOutlined,
    StoreOutlined,
    AddOutlined
} from "@mui/icons-material";

import { IMealPlans, IMealPlanMeals, IFoods } from "../../src/interfaces";
import { CreateMealPlanMeal } from "../../src/components/meal_plan_meals/create"

// INFO BOX ON THE LEFT ===============
// type MealPlanInfoTextProps = {
//     icon: React.ReactNode;
//     text?: string;
// };

// const MealPlanInfoText: React.FC<MealPlanInfoTextProps> = ({ icon, text }) => (
//     <Stack
//         direction="row"
//         alignItems="center"
//         justifyContent={{
//             sm: "center",
//             lg: "flex-start",
//         }}
//         gap={1}
//     >
//         {icon}
//         <Typography variant="body1">{text}</Typography>
//     </Stack>
// );

type AddPeriod = {
    periodNum: number;
}

// TIME OF DAY (3 GRIDS) =============
export const PeriodGrid: React.FC<AddPeriod> = ({ periodNum }) => {
    const createDrawerFormProps = useModalForm<IMealPlanMeals, HttpError, IMealPlanMeals>({
        refineCoreProps: { 
            action: "create",
            resource: "meal_plan_meals",
            redirect: false,
        },
    });
    
    const {
        modal: { show: showCreateDrawer },
    } = createDrawerFormProps;

    const {
        queryResult: { data: mealplans },
    } = useShow<IMealPlans>({
        resource: "meal_plans"
    });
    const mealPlan = mealplans?.data;
    // console.log("MEAL PLAN: ", mealPlan) // mealPlan.id === 1

    const { dataGridProps } = useDataGrid<IMealPlanMeals, HttpError>({
        resource: "meal_plan_meals",
        initialSorter: [
            {
                field: "id",
                order: "asc",
            },
        ],
        permanentFilter: [
            {
                field: "meal_plan_id",
                operator: "eq",
                value: mealPlan?.id,
            },
            {
                field: "period",
                operator: "eq",
                value: periodNum,
            },
        ],
        initialPageSize: 5,
    });

    const {
        options,
        queryResult: { isLoading, data },
    } = useSelect<IFoods>({
        resource: "foods",
        hasPagination: false,
    });

    const foodList = data?.data;
    // console.log("FOOD LIST: ", foodList); 
        // foodList[0].id === 2
        // foodList[0].food_name === Steak Tips

    const columns = React.useMemo<GridColumns<IMealPlanMeals>>(
        () => [
            {
                field: "food_image",
                renderHeader: function render() {
                    return <></>;
                },
                filterable: false,
                filterOperators: undefined,
                disableColumnMenu: true,
                hideSortIcons: true,
                renderCell: function render({ row }) {
                    if(foodList !== undefined){
                        if(foodList[0] !== undefined){
                            return <Avatar
                                alt={`${foodList[0]?.food_name}`}
                                src={`${foodList[0]?.food_image}`}
                                sx={{ width: 74, height: 74 }}
                            />;
                        }
                    }
                    return <Avatar 
                        sx={{ width: 74, height: 74 }}
                    />
                },
                flex: 1,
                minWidth: 80,
            },
            {
                field: "food_name",
                headerName: "Meals",
                renderCell: function render({ row }) {
                        if(foodList !== undefined){
                            if(foodList[0] !== undefined){
                                return foodList[0]?.food_name;
                            }
                        }
                        return null;
                },
                flex: 3
            }
        ],
        [],
    );

    return (
        <DataGrid
            {...dataGridProps}
            columns={columns}
            autoHeight
            rowHeight={80}
            rowsPerPageOptions={[4, 10, 20, 100]}
            // components={{
            //     NoRowsOverlay: CustomNoRowsOverlay,
            // }}
        />
    )
}

export const AddMeal: React.FC<AddPeriod> = ({ periodNum }) => {
    const {
        queryResult: { data: mealplans },
    } = useShow<IMealPlans>({
        resource: "meal_plans"
    });
    const mealPlan = mealplans?.data;
    console.log("mealPlan: ", mealPlan) // meal_plan_id === 1 (number)

    const {
        options,
        queryResult: { isLoading, data },
    } = useSelect<IFoods>({
        resource: "foods",
        hasPagination: false,
    });
    // const { data: identity } = useGetIdentity<{ id: number; fullName: string }>();

        const {
            saveButtonProps,
            refineCore: { formLoading, queryResult },
            register,
            control,
            formState: { errors },
        } = useForm<IFoods, HttpError, IFoods>();
        const foodsData = queryResult?.data?.data;
    
        const { autocompleteProps } = useAutocomplete<IFoods>({
            resource: "foods",
            defaultValue: foodsData?.id,
            sort: [
                {
                    field: "food_name",
                    order: "asc",
                },
            ],
            onSearch: (value) => [
                {
                    field: "food_name",
                    operator: "contains",
                    value,
                }
            ]
        });
        console.log("autocompleterpos: ", autocompleteProps)
    
        return (
            <Create 
                resource="meal_plan_meals" 
                saveButtonProps={saveButtonProps} 
                title={false} 
                breadcrumb={false}
                goBack={false}
                wrapperProps={{
                    sx: {
                        marginBottom: "10px",
                    }
                }}
                headerProps={{
                    sx: {
                        margin: "0",
                        padding: "0",
                        display: "none",
                        visibility: "hidden"
                    }
                }}
                headerButtons={false}
                {...register('id')}
            >
                <Box component="form" isLoading={formLoading} >
                    <Controller
                        control={control}
                        name="foods"
                        rules={{ required: "This field is required" }}
                        render={({ field }) => (
                            <Autocomplete
                            {...autocompleteProps}
                            {...field}
                            onChange={(event, value) => {
                                field.onChange(value); // pass the selected food item object
                            }}
                            getOptionLabel={({ food_name }) => food_name}
                            isOptionEqualToValue={(option, value) =>
                                value === undefined || option.id.toString() === value.toString()
                            }
                            placeholder="Select a food item"
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Add a Food Item"
                                margin="normal"
                                variant="outlined"
                                sx={{ width: "70%" }}
                                required
                                />
                            )}
                            />
                        )}
                    />

                    <FormControl>
                        <input
                            type="hidden"
                            {...register("added_by")}
                            // defaultValue={foodsData.added_by}
                        />
                        <input
                            type="hidden"
                            {...register("added_by_auth")}
                            // defaultValue={foodsData.added_by_auth}
                        />
                        <input
                            type="hidden"
                            {...register("meal_plan_id")} // url params
                            // defaultValue={mealPlan.id}
                        />
                        <input
                            type="hidden"
                            {...register("period")} // props
                            defaultValue={1}
                        />
                    </FormControl>
                </Box>
            </Create>
        )
    }

export const MealPlanShow: React.FC<IResourceComponentsProps> = () => {

    const {
        queryResult: { data: currMealPlan },
    } = useShow<IMealPlans>({
        resource: "meal_plans"
    });
    console.log("Current ========")
    console.log(currMealPlan?.data.date)
    
    const createDrawerFormProps = useModalForm<IMealPlanMeals, HttpError, IMealPlanMeals>({
        refineCoreProps: { 
            action: "create",
            resource: "meal_plan_meals",
            redirect: false,
        },
    });
    
    const {
        modal: { show: showCreateDrawer },
    } = createDrawerFormProps;

    return (
        <Show
            title={<Typography variant="h5">{`Meals for ${currMealPlan?.data.date}`}</Typography>}
            headerButtons={({ defaultButtons }) => (
                <>
                    {defaultButtons}
                    <Button 
                        variant="contained"
                        startIcon={<AddOutlined />}
                        onClick={ () => showCreateDrawer()}
                    >Add A Meal</Button>
                </>
            )}
            breadcrumb={false}
            // canEdit={true}
            // canDelete={true}
            // TODO: Add these two later when I have an Edit modal AND when I have the left side box with the info. Put those buttons there instead of here.
        >
            <Grid container spacing={2}>
                <CreateMealPlanMeal {...createDrawerFormProps} />
                {/* <Grid item xs={12} lg={3}>
                    <Paper sx={{ p: 2 }}>
                        <Stack alignItems="center" spacing={1}>
                            <Avatar
                                src={MealPlan?.avatar?.[0].url}
                                sx={{ width: 120, height: 120 }}
                            />
                            <Typography variant="h6">
                                {MealPlan?.name} {MealPlan?.surname}
                            </Typography>
                        </Stack>
                        <br />
                        <Stack spacing={1}>
                            <MealPlanInfoText
                                icon={<StoreOutlined />}
                                text={MealPlan?.store.title}
                            />
                            <MealPlanInfoText
                                icon={<LocalPhoneOutlined />}
                                text={MealPlan?.gsm}
                            />
                            <MealPlanInfoText
                                icon={<EmailOutlined />}
                                text={MealPlan?.email}
                            />
                            <MealPlanInfoText
                                icon={<AccountBalanceOutlined />}
                                text={MealPlan?.accountNumber}
                            />
                            <MealPlanInfoText
                                icon={<MapOutlined />}
                                text={MealPlan?.address}
                            />
                            <MealPlanInfoText
                                icon={<DirectionsCarFilledOutlined />}
                                text={MealPlan?.licensePlate}
                            />
                        </Stack>
                    </Paper>
                </Grid> */}
                <Grid item xs={12} lg={4}>
                    <Stack direction="column" spacing={2}>
                        <List
                            cardHeaderProps={{ title: "Morning" }}
                            breadcrumb={false}
                        >
                            {/* <AddMeal periodNum={1} /> */}
                            <PeriodGrid periodNum={1} />
                        </List>
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Stack direction="column" spacing={2}>
                        <List
                            cardHeaderProps={{ title: "Afternoon" }}
                            breadcrumb={false}
                        >
                            {/* <AddMeal periodNum={2} /> */}
                            <PeriodGrid periodNum={2} />
                        </List>
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Stack direction="column" spacing={2}>
                        <List
                            cardHeaderProps={{ title: "Evening" }}
                            breadcrumb={false}
                        >
                            {/* <AddMeal periodNum={3} /> */}
                            <PeriodGrid periodNum={3} />
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </Show>
    );
};