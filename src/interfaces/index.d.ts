export interface IUser {
    id: number;
    name: string;
    email: string;
    avatar: IFile[];
    createdAt: string;
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
    createdAt: string;
    food_name: string;
    rating: number;
    tags: string[];
    location: string;
    purchaseAt: string;
    notes: string; 
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

export interface IMealPlanFilterVariables {
    q: string;
    date: boolean;
    mealFood: string;
    eaten: boolean | string;
}