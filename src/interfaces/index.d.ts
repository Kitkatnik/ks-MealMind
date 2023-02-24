export interface IUser {
    id: number;
    user_auth: number;
    full_name: string;
    email: string;
    avatar_url: IFile[];
    created_at: string;
}

export interface IFile {
    uid: string;
    name: string;
    url: string;
    type: string;
    size: number;
    percent: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
}

export interface ICategory {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
}

export interface IFoods {
    id: number;
    created_at: string;
    updated_at: string;
    added_by: IUser;
    added_by_auth: IUser;
    food_name: string;
    rating: number;
    location: string;
    purchase_at: string;
    notes: string; 
    food_image: string;
    category_id: ICategory;
}

export interface IMealPlans {
    id: number;
    created_at: string;
    updated_at: string;
    date: string;
    added_by: IUser;
    added_by_auth: IUser;
    total_foods_eaten: number;
    notes: string;
    day_rating: number;
    total_foods: number;
}

export interface IMealPlanMeals {
    id: number;
    created_at: string;
    updated_at: string;
    meal_plan_id: IMealPlans;
    food_id: IFoods;
    period: number;
    eaten: boolean;
    added_by: IUser;
    added_by_auth: IUser;
}