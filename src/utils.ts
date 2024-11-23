import type { MarkdownInstance } from "astro";
import { recipeIndex } from "./recipe-index.ts";
import { allFractions, SITE_SLUG } from "./const.ts";

/**
 * Gets the url to the page on the site.
 * @param page The path to the page.
 * @returns The url to the page.
 */
export function getPageLink(path?: string) {
    return `/${SITE_SLUG}${path ? `/${path}` : ""}`;
}

/**
 * Gets the url to the recipe on the site.
 * @param recipeId The recipe's id.
 * @returns The url to the recipe.
 */
export function getRecipeLink(recipeId: string) {
    return `/${SITE_SLUG}/posts/${recipeIndex[recipeId]}`;
}

/**
 * Sorts recipes alphabetically by their title.
 * @param a The first recipe.
 * @param b The second recipe.
 * @returns A number denoting the order of the recipes.
 */
export function titleSort(a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>) {
    let aTitle = (a.frontmatter.title ?? "" as string).toLowerCase();
    let bTitle = (b.frontmatter.title ?? "" as string).toLowerCase();
    if (bTitle < aTitle) {
        return 1;
    } else if (bTitle > aTitle) {
        return -1;
    }
    return 0;
}

/**
 * Gets the string representation of a floating point number to a specified decimal count.
 * @param input The number to convert.
 * @param maxDecimalPrecision The maximum number of decimals to show.
 * @returns The string representation of the number.
 */
export function getFloatString(input: number, maxDecimalPrecision: number): string {
    return parseFloat((input).toFixed(maxDecimalPrecision)).toString();
}

/**
 * Gets a number as a fraction symbol if available, otherwise show the number as is.
 * @param input The number to convert.
 * @returns The appropriate number string.
 */
export function getFraction(input: number): string {
    return allFractions[input] ?? getFloatString(input, 2);
}

export function preventNonNumeric(event: KeyboardEvent){
    if (!(event.key == "Backspace" || event.key == "Delete" || /\d/.test(event.key) || event.key.includes("Arrow") || event.key == ".")){
        event.preventDefault();
    }
}