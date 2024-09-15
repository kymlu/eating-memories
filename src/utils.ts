import type { MarkdownInstance } from "astro";
import { recipeIndex } from "./recipe-index";

export const SITE_TITLE: string = "Recipe Vault";
export const SITE_SLUG: string = "eating-memories";
export const PAGE_NAMES = {
    HOME: "",
    SITEMAP: "sitemap",
    ABOUT: "about",
    FAQ: "faq",
    FAVES: "faves"
}

export const LOCAL_STORAGE_KEYS = {
    FAVES: "faves"
}

export function getPageLink(page?: string) {
    return `/${SITE_SLUG}${page ? `/${page}` : ""}`;
}

export function getPostLink(postId: string){
    return `/${SITE_SLUG}/posts/${recipeIndex[postId]}`;
}

export function dateSort (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>){
    return Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate);
}