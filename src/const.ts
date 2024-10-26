import type { unitType } from "./interface.ts";

export const SITE_TITLE: string = "Recipe Box";
export const SITE_SLUG: string = "eating-memories";
export const PAGE_NAMES = {
    HOME: "",
    SITEMAP: "sitemap",
    ABOUT: "about",
    FAQ: "faq",
    SAVED: "saved",
    SUBSTITUTIONS: "substitutions",
    ARCHIVE: "archive"
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
    FLASK: "mingcute:flask-2-line",
    PRINT: "mingcute:print-line",
}

export const NAV_SECTIONS: { display: string, path?: string, icon?: string }[] =
    [{ display: "Recipes", path: undefined },
    { display: "Saved", path: PAGE_NAMES.SAVED, icon: ICONS.SAVED },
    { display: "Substitutions", path: PAGE_NAMES.SUBSTITUTIONS },
    { display: "About", path: PAGE_NAMES.ABOUT },
    { display: "FAQ", path: PAGE_NAMES.FAQ },
    { display: "Archive", path: PAGE_NAMES.ARCHIVE }]

export const UNIT_TYPE_NAMES = {
    WEIGHT: "weight",
    TEMPERATURE: "temperature",
    LENGTH: "length",
    VOLUME: "volume"
}


export const UNIT_TYPES: unitType[] = [
    {
        name: UNIT_TYPE_NAMES.WEIGHT, isDefault: true, units: [
            {
                name: "pound",
                display: "lbs.",
                multiplier: 453.592,
                isSecondDefault: true,
                defaultValue: "1"
            },
            {
                name: "ounce",
                display: "oz.",
                multiplier: 28.3495
            },
            {
                name: "gram",
                display: "g",
                multiplier: 1,
                isFirstDefault: true,
                defaultValue: "453.59"
            },
        ]
    },
    {
        name: UNIT_TYPE_NAMES.TEMPERATURE, isDefault: false, units: [
            {
                name: "fahrenheit",
                display: "°F",
                isSecondDefault: true,
                defaultValue: "350"
            },
            {
                name: "celcius",
                display: "°C",
                isFirstDefault: true,
                defaultValue: "176.67"
            }]
    },
    {
        name: UNIT_TYPE_NAMES.LENGTH, isDefault: false, units: [
            {
                name: "inch",
                display: "in.",
                multiplier: 25.4,
                isSecondDefault: true,
                defaultValue: "1"
            },
            {
                name: "centimetre",
                display: "cm",
                multiplier: 10,
                isFirstDefault: true,
                defaultValue: "2.54"
            },
            {
                name: "millimetre",
                display: "mm",
                multiplier: 1,
            }
        ]
    },
    {
        name: UNIT_TYPE_NAMES.VOLUME, isDefault: false, units: [
            {
                name: "cup",
                display: "cup",
                multiplier: 240,
                isSecondDefault: true,
                defaultValue: "1"
            },
            {
                name: "teaspoon",
                display: "tsp",
                multiplier: 4.92892,
            },
            {
                name: "tablespoon",
                display: "tbsp",
                multiplier: 14.7868,
            },
            {
                name: "litre",
                display: "L",
                multiplier: 1000,
            },
            {
                name: "millilitre",
                display: "ml",
                multiplier: 1,
                isFirstDefault: true,
                defaultValue: "240"
            }]
    }]

export const YIELD_MULTIPLIERS: { key: string, value: number, displayValue: string }[] =
    [
        { key: "quarter", value: 0.25, displayValue: "¼" },
        { key: "half", value: 0.5, displayValue: "½" },
        { key: "original", value: 1, displayValue: "1" },
        { key: "double", value: 2, displayValue: "2" },
        { key: "triple", value: 3, displayValue: "3" },
        { key: "quadruple", value: 4, displayValue: "4" },
    ];

export const allFractions: { [key: number]: string } = {
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