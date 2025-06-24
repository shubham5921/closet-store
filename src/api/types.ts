export interface ContentItem {
    id: string;
    title: string;
    creator?: string;
    imagePath: string;
    pricingOption: PricingOption;
    price?: number;
}

export enum PricingOption {
    PAID = 0,
    FREE = 1,
    VIEW_ONLY = 2,
}