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

const MealPlanShow: React.FC<IResourceComponentsProps> = () => {

    const {
        queryResult: { data: currMealPlan },
    } = useShow<IMealPlans>({
        resource: "meal_plans"
    });
    // console.log("Current ========")
    // console.log(currMealPlan?.data.date)
    
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
                        </Stack>
                    </Paper>
                </Grid> */}
                <Grid item xs={12} lg={4}>
                    <Stack direction="column" spacing={2}>
                        <List
                            cardHeaderProps={{ title: "Morning" }}
                            breadcrumb={false}
                        >
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
                            <PeriodGrid periodNum={3} />
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </Show>
    );
};

export default MealPlanShow;