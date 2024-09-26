
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
    CALCULATOR: "mingcute:counter-2-line",
    THERMOMETER: "mingcute:thermometer-line",
    BALANCE: "mingcute:balance-line",
    RULER: "mingcute:ruler-line",
}

export const CONVERTER_TYPES = {
    WEIGHT: "weight",
    TEMPERATURE: "temperature",
    LENGTH: "length",
}

export const WEIGHT_TYPES = {
    POUND: {
        name: "pound",
        multiplier: 453.592,
    },
    KILOGRAM: {
        name: "kilogram",
        multiplier: 1000,
    },
    OUNCE: {
        name: "ounce",
        multiplier: 28.3495
    },
    GRAM: {
        name: "gram",
        multiplier: 1,
    },
}

export const TEMPERATURE_TYPES = {
    FAHRENHEIT: { name: "fahrenheit"},
    CELCIUS: {name: "celcius"},
}

export const LENGTH_TYPES = {
    INCH: {
        name: "inch",
        multiplier: 254,
    },
    CENTIMETRE: {
        name: "centimetre",
        multiplier: 10
    },
    MILLIMETRE: {
        name: "millimetre",
        multiplier: 1,
    },
}

export const YIELD_MULTIPLIERS : {key: string, value: number, displayValue: string}[] = 
    [
        {key: "half", value: 0.5, displayValue: "½"},
        {key: "original", value: 1, displayValue: "1"},
        {key: "double", value: 2, displayValue: "2"},
        {key: "triple", value: 3, displayValue: "3"},
        {key: "quadruple", value: 4, displayValue: "4"},
    ];