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