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