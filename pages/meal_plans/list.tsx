import React, {useState} from "react";
import {
    IResourceComponentsProps,
    useDelete,
    useNavigation,
    HttpError,
} from "@pankod/refine-core";
import { useModalForm } from "@pankod/refine-react-hook-form";
import {
    Grid,
    Paper,
    Typography,
    InputBase,
    IconButton,
    Stack,
    Pagination,
    CreateButton,
    DataGrid,
    useDataGrid,
    GridColumns,
    GridActionsCellItem,
    List,
    Button
} from "@pankod/refine-mui";
import { Edit, Close,VisibilityOutlined, AddOutlined } from "@mui/icons-material";

import {
    CreateMealPlan,
    EditMealPlan,
} from "../../src/components/meal_plans";
import { IMealPlans } from "../../src/interfaces";

const MealPlanList: React.FC<IResourceComponentsProps> = () => {
    const { show, edit } = useNavigation();
    const { mutate: mutateDelete } = useDelete();

    const { dataGridProps } = useDataGrid<IMealPlans>({
        initialPageSize: 10,
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
    });

    const createDrawerFormProps = useModalForm<IMealPlans, HttpError, IMealPlans>({
        refineCoreProps: { action: "create" },
    });

    const {
        modal: { show: showCreateDrawer },
    } = createDrawerFormProps;

    const editDrawerFormProps = useModalForm<IMealPlans, HttpError, IMealPlans>({
        refineCoreProps: { action: "edit" },
    });

    const {
        modal: { show: showEditDrawer },
    } = editDrawerFormProps;

    const columns = React.useMemo<GridColumns<IMealPlans>>(
        () => [
            {
                field: "date",
                headerName: "Date",
                flex: 3,
                minWidth: 200,
            },
            {
                field: "actions",
                headerName: "Actions",
                type: "actions",
                getActions: function render({ row }) {
                    return [
                        <GridActionsCellItem
                            key={1}
                            label={"Edit"}
                            icon={<Edit color="success" />}
                            onClick={() => showEditDrawer()}
                            showInMenu
                        />,
                        <GridActionsCellItem
                            key={2}
                            label={"Delete"}
                            icon={<Close color="error" />}
                            onClick={() => {
                                mutateDelete({
                                    resource: "meal_plans",
                                    id: row.id,
                                    mutationMode: "undoable",
                                });
                            }}
                            showInMenu
                        />,
                    ];
                },
            },
        ],
        [],
    );

    return (
        <>
            <CreateMealPlan {...createDrawerFormProps} />
            <EditMealPlan {...editDrawerFormProps} />
            <Paper
                sx={{
                    paddingX: { xs: 3, md: 2 },
                    paddingY: { xs: 2, md: 3 },
                    my: 0.5,
                }}
            >
                <List 
                    cardProps={{ sx: { paddingX: { xs: 2, md: 0 } } }} 
                    // canCreate={true} 
                    // createButtonProps={  }
                    headerButtons={({ defaultButtons }) => (
                        <>
                            {defaultButtons}
                            <Button 
                                variant="contained"
                                startIcon={<AddOutlined />}
                                onClick={ () => showCreateDrawer()}
                            >Create A Meal Plan</Button>
                        </>
                    )}
                >
                    <DataGrid
                        {...dataGridProps}
                        columns={columns}
                        autoHeight
                        rowsPerPageOptions={[10, 20, 50, 100]}
                        density="comfortable"
                        sx={{
                            "& .MuiDataGrid-cell:hover": {
                                cursor: "pointer",
                            },
                        }}
                        onRowClick={(row) => {
                            show("meal_plans", row.id);
                        }}
                    />
                </List>
            </Paper>
        </>
    );
};

export default MealPlanList;