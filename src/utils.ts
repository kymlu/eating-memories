import type { MarkdownInstance } from "astro";
import { recipeIndex } from "./recipe-index";
import { SITE_SLUG } from "./const";

export function getPageLink(page?: string) {
    return `/${SITE_SLUG}${page ? `/${page}` : ""}`;
}

export function getPostLink(postId: string){
    return `/${SITE_SLUG}/posts/${recipeIndex[postId]}`;
}

export function dateSort (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>){
    return Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate);
}