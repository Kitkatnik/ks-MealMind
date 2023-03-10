import React from "react";
import {
    IResourceComponentsProps,
    useTable,
    HttpError,
} from "@pankod/refine-core";
import { useModalForm } from "@pankod/refine-react-hook-form";
import {
    Grid,
    Paper,
    Typography,
    Stack,
    Pagination,
    CreateButton,
} from "@pankod/refine-mui";

import {
    CategoryFilter,
    FoodItem,
    CreateFood,
    EditFood,
} from "../../src/components/food";
import { IFoods } from "../../src/interfaces";

const FoodList: React.FC<IResourceComponentsProps> = () => {

    const { tableQueryResult, setFilters, setCurrent, filters, pageCount } =
        useTable<IFoods>({
            resource: "foods",
            initialPageSize: 12,
        });

    const createDrawerFormProps = useModalForm<IFoods, HttpError, IFoods>({
        refineCoreProps: { action: "create" },
    });

    const {
        modal: { show: showCreateDrawer },
    } = createDrawerFormProps;

    const editDrawerFormProps = useModalForm<IFoods, HttpError, IFoods>({
        refineCoreProps: { action: "edit" },
    });

    const {
        modal: { show: showEditDrawer },
    } = editDrawerFormProps;

    // fetches the food items for the current page
    const foods: IFoods[] = tableQueryResult.data?.data || [];

    return (
        <>
            <CreateFood {...createDrawerFormProps} />
            <EditFood {...editDrawerFormProps} />
            <Paper
                sx={{
                    paddingX: { xs: 3, md: 2 },
                    paddingY: { xs: 2, md: 3 },
                    my: 0.5,
                    boxShadow: "none",
                }}
                elevation={0}
            >
                <Grid container columns={16} >
                    <Grid item xs={16} md={12} >
                        <Stack
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            flexWrap="wrap"
                            padding={1}
                            direction="row"
                            gap={2}
                            marginBottom={2}
                        >
                            <Typography variant="h4">
                                <strong>Food List</strong>
                            </Typography>
                            <CreateButton
                                onClick={() => showCreateDrawer()}
                                variant="outlined"
                                sx={{ 
                                    border: "4px solid #000000",
                                    boxShadow: "4px 4px 0px #000000",
                                    backgroundColor: "neoBright.red",
                                    color: "#000000",
                                    transition: "box-shadow 0.5s, background-color 0.5s",
                                    '&:hover': {
                                        border: "4px solid #000000",
                                        boxShadow: "none",
                                        backgroundColor: "neoPastel.red",
                                    }
                                }}
                            >
                                Add Food Item
                            </CreateButton>
                        </Stack>
                        <Grid container> 
                            {foods.length > 0 ? (
                                foods.map((food: IFoods) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        lg={4}
                                        xl={3}
                                        key={food.id}
                                        sx={{ padding: "8px" }}
                                    >
                                        <FoodItem
                                            food={food}
                                            show={showEditDrawer}
                                        />
                                    </Grid>
                                ))
                            ) : (
                                <Grid
                                    container
                                    justifyContent="center"
                                    padding={3}
                                >
                                    <Typography variant="body1">
                                        <strong>No Food Items</strong>
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                        <Pagination
                            count={pageCount}
                            // variant="outlined"
                            color="primary"
                            shape="rounded"
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                paddingY: "20px",
                            }}
                            onChange={(
                                event: React.ChangeEvent<unknown>,
                                page: number,
                            ) => {
                                event.preventDefault();
                                setCurrent(page);
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        sm={0}
                        md={4}
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}
                    >
                        <Stack padding="8px">
                            <Typography variant="subtitle1">
                                <strong>Use categories to filter your search</strong>
                            </Typography>
                            <CategoryFilter
                                setFilters={setFilters}
                                filters={filters}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default FoodList;