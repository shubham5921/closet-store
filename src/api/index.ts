import axios from "axios";
import { API_BASE_URL } from "../utility";
import { ContentItem } from "./types";


export const fetchData = async (): Promise<ContentItem[]> => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch contents');
    }
};