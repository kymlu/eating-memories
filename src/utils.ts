import type { MarkdownInstance } from "astro";
import { recipeIndex } from "./recipe-index";
import { SITE_SLUG } from "./const";

export function getPageLink(page?: string) {
    return `/${SITE_SLUG}${page ? `/${page}` : ""}`;
}

export function getPostLink(postId: string){
    return `/${SITE_SLUG}/posts/${recipeIndex[postId]}`;
}

export function titleSort(a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>){
    let aTitle = (a.frontmatter.title ?? "" as string).toLowerCase();
    let bTitle = (b.frontmatter.title ?? "" as string).toLowerCase();
    if(bTitle < aTitle) {
        return 1;
    } else if (bTitle > aTitle) {
        return -1;
    } 
    return 0;
}

export function dateSort (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>){
    return Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate);
}

export function getFloatString(input: number, maxDecimalPrecision: number): string{
    return parseFloat((input).toFixed(maxDecimalPrecision)).toString();
}

export function getFraction(input: number): string {
    const allFractions: { [key: number]: string } = {
        0.125: "⅛",
        0.2: "⅕",
        0.25: "¼",
        0.33: "⅓",
        0.375: "⅜",
        0.4: "⅖",
        0.5: "½",
        0.6: "⅗",
        0.625: "⅝",
        0.67: "⅔",
        0.75: "¾",
        0.85: "⅘",
        0.875: "⅞"
    } 
    
    return allFractions[input] ?? getFloatString(input, 2); 
}