
import { LOCAL_STORAGE_KEYS } from "../const.ts";

let savedList: string[];

/**
 * Gets the ids of recipes the user saved.
 * @returns The list of recipe ids.
 */
export function getSavedRecipesFromStorage(): string[] {
    let currentSaved = window.localStorage.getItem(LOCAL_STORAGE_KEYS.SAVED);
    let savedList: string[] = [];
    if (currentSaved) {
        try {
            savedList = (JSON.parse(currentSaved) as string[]).filter(saved => saved != "") ?? [];
        } catch (e) {
            window.localStorage.removeItem(LOCAL_STORAGE_KEYS.SAVED);
        }
    }

    return savedList;
}

export function getUserSavedRecipes(): string[] {
    if (!savedList) {
        savedList = getSavedRecipesFromStorage();
    }
    return savedList;
}

export function addSavedRecipe(recipeId: string): boolean {
    if (!savedList.includes(recipeId)) {
        savedList.push(recipeId);
        saveListToStorage();
        return true;
    }
    return false;
}

export function removeSavedRecipe(recipeId: string) {
    if (savedList.includes(recipeId)) {
        savedList.splice(savedList.indexOf(recipeId), 1);
        saveListToStorage();
        return true;
    }
    return false;
}

function saveListToStorage() {
    let newSaved = JSON.stringify(savedList);
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.SAVED, newSaved);
}