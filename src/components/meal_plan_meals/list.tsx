import React from "react";
import {
    IResourceComponentsProps,
    useDelete,
    useNavigation,
} from "@pankod/refine-core";
import {
    DataGrid,
    useDataGrid,
    GridColumns,
    GridActionsCellItem,
    List,
    Stack,
    Avatar,
    Typography,
    Tooltip,
} from "@pankod/refine-mui";
import { Edit, Close } from "@mui/icons-material";

import { IMealPlans } from "../../src/interfaces";

export const MealPlanList: React.FC<IResourceComponentsProps> = () => {
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

    const columns = React.useMemo<GridColumns<IMealPlans>>(
        () => [
            // {
            //     field: "name",
            //     headerName: "Meal Plans",
            //     renderCell: function render({ row }) {
            //         return (
            //             <Stack alignItems="center" direction="row" spacing={2}>
            //                 <Avatar
            //                     alt={`${row.name} ${row.surname}`}
            //                     src={row.avatar?.[0]?.url}
            //                 />
            //                 <Typography variant="body2">
            //                     {row.name} {row.surname}
            //                 </Typography>
            //             </Stack>
            //         );
            //     },
            //     flex: 1,
            //     minWidth: 200,
            // },
            {
                field: "date",
                headerName: "Date",
                flex: 1,
                minWidth: 200,
            },
            {
                field: "total_foods_eaten",
                headerName: "Total Eaten",
                flex: 1,
                minWidth: 300,
            },
            {
                field: "total_foods",
                headerName: "Total Meals",
                flex: 1,
                minWidth: 300,
            },
            {
                field: "day_rating",
                headerName: "Day Rating",
                flex: 1,
                minWidth: 300,
            },
            {
                field: "actions",
                headerName: "Actions",
                type: "actions",
                getActions: function render({ row }) {
                    return [
                        // @ts-expect-error `@mui/x-data-grid@5.17.12` broke the props of `GridActionsCellItem` and requires `onResize` and `onResizeCapture` props which should be optional.
                        <GridActionsCellItem
                            key={1}
                            label={"Edit"}
                            icon={<Edit color="success" />}
                            onClick={() => edit("meal_plans", row.id)}
                            showInMenu
                        />,
                        // @ts-expect-error `@mui/x-data-grid@5.17.12` broke the props of `GridActionsCellItem` and requires `onResize` and `onResizeCapture` props which should be optional.
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
        <List cardProps={{ sx: { paddingX: { xs: 2, md: 0 } } }}>
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
    );
};