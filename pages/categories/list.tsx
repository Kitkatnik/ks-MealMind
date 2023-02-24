import React, { useCallback } from "react";
import {
    IResourceComponentsProps,
    HttpError,
} from "@pankod/refine-core";
import { useForm, useModalForm } from "@pankod/refine-react-hook-form";
import {
    useTable,
    ColumnDef,
    flexRender,
    Row,
} from "@pankod/refine-react-table";
import {
    List,
    BooleanField,
    Checkbox,
    TableContainer,
    Table,
    Stack,
    EditButton,
    TableBody,
    TableRow,
    Button,
    SaveButton,
    TableCell,
    TextField,
    TableHead,
    IconButton,
    Typography,
    TablePagination,
    useDataGrid,
    Avatar,
    GridColumns,
    DataGrid,
    DateField,
    NumberField,
    GridActionsCellItem,
    CreateButton
} from "@pankod/refine-mui";

import {
    Edit,
    AddCircleOutline,
    RemoveCircleOutline,
} from "@mui/icons-material";

import { ICategory, IFoods } from "../../src/interfaces";

import { CreateFood, EditFood } from "../../src/components/food";
import { StyledRating, IconContainer, customIcons,  } from '../../src/components/ratings'

export const CategoryList: React.FC<IResourceComponentsProps> = () => {
    const {
        refineCore: { onFinish, id, setId },
        register,
        handleSubmit,
    } = useForm<ICategory>({
        refineCoreProps: {
            redirect: false,
            action: "edit",
        },
    });

    const columns = React.useMemo<ColumnDef<ICategory>[]>(
        () => [
            {
                id: "title",
                accessorKey: "title",
                header: "Categories",
                cell: function render({ row, getValue }) {
                    return (
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <IconButton onClick={() => row.toggleExpanded()}>
                                {row.getIsExpanded() ? (
                                    <RemoveCircleOutline fontSize="small" />
                                ) : (
                                    <AddCircleOutline fontSize="small" />
                                )}
                            </IconButton>
                            <Typography>{getValue() as string}</Typography>
                        </Stack>
                    );
                },
            },
        ],
        [],
    );

    const {
        options: {
            state: { pagination },
            pageCount,
        },
        getHeaderGroups,
        getRowModel,
        setPageIndex,
        setPageSize,
        refineCore: { tableQueryResult },
    } = useTable<ICategory>({
        columns,
        initialState: {
            sorting: [{ id: "title", desc: false }],
        },
    });

    const renderRowSubComponent = useCallback(
        ({ row }: { row: Row<ICategory> }) => (
            <CategoryFoodsTable record={row.original} />
        ),
        [],
    ); 

    return (
        <List cardProps={{ sx: { paddingX: { xs: 2, md: 0 } } }}>
            <form onSubmit={handleSubmit(onFinish)}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            {getHeaderGroups().map((headerGroup) => (
                                <TableRow
                                    key={`header-group-${headerGroup.id}`}
                                >
                                    {headerGroup.headers.map((header) => (
                                        <TableCell
                                            key={`header-group-cell-${header.id}`}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {getRowModel().rows.map((row) => {
                                return (
                                    <React.Fragment key={row.id}>
                                        {id ===
                                        (row.original as ICategory).id ? (
                                            null
                                        ) : (
                                            <TableRow>
                                                {row
                                                    .getAllCells()
                                                    .map((cell) => {
                                                        return (
                                                            <TableCell
                                                                key={cell.id}
                                                            >
                                                                {flexRender(
                                                                    cell.column
                                                                        .columnDef
                                                                        .cell,
                                                                    cell.getContext(),
                                                                )}
                                                            </TableCell>
                                                        );
                                                    })}
                                            </TableRow>
                                        )}
                                        {row.getIsExpanded() ? (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={
                                                        row.getVisibleCells()
                                                            .length
                                                    }
                                                >
                                                    {renderRowSubComponent({
                                                        row,
                                                    })}
                                                </TableCell>
                                            </TableRow>
                                        ) : null}
                                    </React.Fragment>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        {
                            label: "All",
                            value: tableQueryResult.data?.total ?? 100,
                        },
                    ]}
                    showFirstButton
                    showLastButton
                    count={pageCount || 0}
                    rowsPerPage={pagination?.pageSize || 10}
                    page={pagination?.pageIndex || 0}
                    onPageChange={(_, newPage: number) => setPageIndex(newPage)}
                    onRowsPerPageChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                    ) => {
                        setPageSize(parseInt(event.target.value, 10));
                        setPageIndex(0);
                    }}
                />
            </form>
        </List>
    );
};

const CategoryFoodsTable: React.FC<{ record: ICategory }> = ({ record }) => {

    const { dataGridProps } = useDataGrid<IFoods>({
        resource: "foods",
        initialPageSize: 5,
        permanentFilter: [
            {
                field: "category_id",
                operator: "eq",
                value: record.id,
            },
        ],
        permanentSorter: [
            {
                field: "food_name",
                order: "asc",
            },
        ],
        syncWithLocation: false,
    });

    const columns = React.useMemo<GridColumns<IFoods>>( 
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
                    return (
                        <Avatar
                            alt={`${row.food_name}`}
                            src={row.food_image}
                            sx={{ width: 74, height: 74 }}
                        />
                    );
                },
                flex: 1,
                minWidth: 80,
            },
            {
                field: "food_name",
                headerName: "Name",
                flex: 1,
                minWidth: 180,
            },
            {
                field: "rating",
                headerName: "Rating",
                renderCell: function render({ row }) {
                    return (
                        <StyledRating
                            name="highlight-selected-only"
                            defaultValue={row.rating}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value: number) => customIcons[value].label}
                            highlightSelectedOnly
                            readOnly
                        />
                    );
                },
                flex: 1,
                minWidth: 180,
            },
            {
                field: "location",
                headerName: "Eating Location",
                flex: 1,
                minWidth: 180,
            },
            {
                field: "purchase_at",
                headerName: "Purchase Location",
                flex: 1,
                minWidth: 180,
            },
            {
                field: "notes",
                headerName: "Notes",
                flex: 2,
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
                            icon={<Edit />}
                            onClick={() => showEditDrawer(row.id)}
                            showInMenu
                        />,
                    ];
                },
                flex: 0.5,
                minWidth: 100,
            },
        ],
        [],
    );

    const CustomNoRowsOverlay = () => {
        // console.log("HERE")
        return (
            <Stack height="100%" alignItems="center" justifyContent="center">
                <Typography variant="h5">
                    No food items found.
                </Typography>
                <CreateButton
                    onClick={() => showCreateDrawer()}
                    sx={{ margin: "10px", zIndex: 5 }}
                >
                    Add Food Item
                </CreateButton>
            </Stack>
        )
    }

    const createDrawerFormProps = useModalForm<IFoods, HttpError, IFoods>({
        refineCoreProps: { 
            action: "create",
            resource: "foods",
            redirect: false,
        },
    });
    
    const {
        modal: { show: showCreateDrawer },
    } = createDrawerFormProps;

    const editDrawerFormProps = useModalForm<IFoods, HttpError, IFoods>({
        refineCoreProps: {
            action: "edit",
            resource: "foods",
            redirect: false,
        },
    });

    const {
        modal: { show: showEditDrawer },
    } = editDrawerFormProps;

    return (
        <List
            cardHeaderProps={{
                title: "Food Items",
            }}
        >
            <DataGrid
                {...dataGridProps}
                columns={columns}
                rowHeight={80}
                autoHeight
                density="comfortable"
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                components={{
                    NoRowsOverlay: CustomNoRowsOverlay,
                }}
            />
            <CreateFood {...createDrawerFormProps} />
            <EditFood {...editDrawerFormProps} /> 
        </List>
    );
};