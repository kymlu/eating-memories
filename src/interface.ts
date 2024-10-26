export interface Dictionary<T> {
    [id: string]: T;
}

export interface unitType {
    name: string;
    isDefault?: boolean;
    units: unit[];
}

export interface unit {
    name: string;
    display: string;
    multiplier?: number;
    isFirstDefault?: boolean;
    isSecondDefault?: boolean;
    defaultValue?: string;
}

export interface Recipe {
    layout: string;
    id: string;
    title: string;
    pubDate: Date;
    description: string;
    adaptedFrom?: string;
    adaptedFromURL?: string;
    cuisine?: string;
    course?: string;
    dietary?: string[];
    yield?: number;
    yieldUnit?: string;
    ingredients?: IngredientsGroup[];
    url: string;
}

export interface IngredientsGroup {
    name?: string;
    ingredients: Ingredient[];
    recipeId?: string;
}

export interface Ingredient {
    quantity?: number;
    unit?: string;
    name: string;
    note?: string;
    recipeId?: string;
    id?: string;
}