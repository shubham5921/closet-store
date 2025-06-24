import { ContentItem } from "../api/types";

export type FilterKey = 'paid' | 'free' | 'viewOnly';

export interface ContentsState {
    items: ContentItem[];
    filteredItems: ContentItem[];
    loading: boolean;
    error: string | null;
    pricingOptions: any;
    keyword: string;
}