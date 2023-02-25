import { useState, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import {
    CrudFilters,
    getDefaultFilter,
    useList,
} from "@pankod/refine-core";
import { Stack, Grid } from "@pankod/refine-mui";

import { ICategory } from "../../interfaces";

type FoodItemProps = {
    setFilters: (filters: CrudFilters) => void;
    filters: CrudFilters;
};

export const CategoryFilter: React.FC<FoodItemProps> = ({
    setFilters,
    filters,
}) => {

    const [filterCategories, setFilterCategories] = useState<string[]>(
        getDefaultFilter("category_id", filters, "in") ?? [],
    );

    const { data: categories, isLoading } = useList<ICategory>({
        resource: "categories",
    });

    useEffect(() => {
        setFilters?.([
            {
                field: "category_id",
                operator: "in",
                value:
                    filterCategories.length > 0 ? filterCategories : undefined,
            },
        ]);
    }, [filterCategories]);

    const toggleFilterCategory = (clickedCategory: string) => {
        const target = filterCategories.findIndex(
            (category) => category === clickedCategory,
        );

        if (target < 0) {
            setFilterCategories((prevCategories) => {
                return [...prevCategories, clickedCategory];
            });
        } else {
            const copyFilterCategories = [...filterCategories];

            copyFilterCategories.splice(target, 1);

            setFilterCategories(copyFilterCategories);
        }
    };

    return (
        <Stack>
            <Grid container columns={6} marginTop="10px">
                <Grid item p={0.5}>
                    <LoadingButton
                        onClick={() => setFilterCategories([])}
                        variant={
                            filterCategories.length === 0
                                ? "contained"
                                : "outlined"
                        }
                        size="small"
                        loading={isLoading}
                        sx={
                            filterCategories.length === 0
                                ? {
                                    borderRadius: "50px",
                                    border: "2px solid",
                                    borderColor: "primary.main",
                                    boxShadow: "2px 2px 0px #5864fd",
                                    backgroundColor: "#000000",
                                    color: "#E4E6EB",
                                    margin: "4px",
                                    transition: "box-shadow 0.5s, border 0.5s",
                                    '&:hover': {
                                        boxShadow: "none",
                                        border: "2px solid #000000"
                                    }}
                                : {
                                    borderRadius: "50px",
                                    border: "2px solid ",
                                    boxShadow: "2px 2px 0px",
                                    margin: "4px",
                                    backgroundColor: "darkMode.primary",
                                    color: "darkMode.white",
                                    transition: "box-shadow 0.5s, background-color 0.5s, color 0.5s",
                                    '&:hover': {
                                        boxShadow: "none",
                                        backgroundColor: "primary.main",
                                        color: "#ffffff"
                                    }}
                        }
                    >
                        {"All"}
                    </LoadingButton>
                </Grid>
                {categories?.data.map((category: ICategory) => (
                    <Grid item key={category.id} p={0.5}>
                        <LoadingButton
                            variant={
                                filterCategories.includes(
                                    category.id.toString(),
                                )
                                    ? "contained"
                                    : "outlined"
                            }
                            size="small"
                            loading={isLoading}
                            sx={
                                filterCategories.includes(
                                    category.id.toString(),
                                )
                                ? {
                                    borderRadius: "50px",
                                    border: "2px solid",
                                    borderColor: "primary.main",
                                    boxShadow: "2px 2px 0px #5864fd",
                                    backgroundColor: "#000000",
                                    color: "#E4E6EB",
                                    margin: "4px",
                                    transition: "box-shadow 0.5s, border 0.5s",
                                    '&:hover': {
                                        boxShadow: "none",
                                        border: "2px solid #000000"
                                    }
                                }
                                : {
                                    borderRadius: "50px",
                                    border: "2px solid ",
                                    boxShadow: "2px 2px 0px",
                                    margin: "4px",
                                    backgroundColor: "darkMode.primary",
                                    color: "darkMode.white",
                                    transition: "box-shadow 0.5s, background-color 0.5s, color 0.5s",
                                    '&:hover': {
                                        boxShadow: "none",
                                        backgroundColor: "primary.main",
                                        color: "#ffffff"
                                    }
                                }
                            }
                            onClick={() =>
                                toggleFilterCategory(category.id.toString())
                            }
                        >
                            {category.title}
                        </LoadingButton>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};