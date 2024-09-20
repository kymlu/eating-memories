
export const SITE_TITLE: string = "Recipe Box";
export const SITE_SLUG: string = "eating-memories";
export const PAGE_NAMES = {
    HOME: "",
    SITEMAP: "sitemap",
    ABOUT: "about",
    FAQ: "faq",
    SAVED: "saved",
    SUBSTITUTIONS: "substitutions"
}

export const LOCAL_STORAGE_KEYS = {
    SAVED: "saved"
}

export const ICONS = {
    LOGO: "mingcute:fork-knife-line",
    SAVED: "mingcute:bookmark-fill",
    NOT_SAVED: "mingcute:bookmark-line",
    EXPAND: "mingcute:down-line",
    COLLAPSE: "mingcute:up-line",
    PLUS: "mingcute:plus-fill",
    MINUS: "mingcute:minimize-fill",
    HAPPY: "mingcute:happy-line",
    SAD: "mingcute:sad-line",
    GITHUB: "mingcute:github-2-line",
    CLOSE: "mingcute:close-line",
    MENU: "mingcute:menu-line",
    SUN: "mingcute:sun-line",
    MOON: "mingcute:moon-line",
}

export const YIELD_MULTIPLIERS : {key: string, value: number, displayValue: string}[] = 
    [
        {key: "half", value: 0.5, displayValue: "½"},
        {key: "original", value: 1, displayValue: "1"},
        {key: "double", value: 2, displayValue: "2"},
        {key: "triple", value: 3, displayValue: "3"},
        {key: "quadruple", value: 4, displayValue: "4"},
    ];