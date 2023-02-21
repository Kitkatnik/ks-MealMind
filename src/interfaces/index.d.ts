export interface IUser {
    id: number;
    name: string;
    email: string;
    avatar: IFile[];
    created_at: string;
}

export interface IFile {
    name: string;
    percent: number;
    size: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    type: string;
    uid: string;
    url: string;
}

export interface IFoods {
    id: number;
    user: IUser;
    created_at: string;
    food_name: string;
    rating: number;
    tags: string[];
    location: string;
    purchase_at: string;
    notes: string; 
    food_image: string;
    category: ICategory;
}

export interface IMealPlans {
    id: number;
    user: IUser;
    createdAt: string;
    date: string;
    period: string;
    morningRating: number;
    afternoonRating: number;
    eveningRating: number;
    eaten: boolean; 
    mealFood: string[];
}

export interface ICategory {
    id: number;
    title: string;
    is_active: boolean;
}