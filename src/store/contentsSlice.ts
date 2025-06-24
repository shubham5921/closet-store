import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../api";
import { ContentsState } from "./types";
import { ContentItem } from "../api/types";


const initialState: ContentsState = {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    keyword: '',
    pricingOptions: [],
};

export const fetchClosetData = createAsyncThunk(
    'closet/fetchInitialData',
    async (_, { dispatch }) => {
        const response = await fetchData();
        dispatch(setData(response));
        dispatch(filterData());
    }
);

const closetSlice = createSlice({
    name: 'closet',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ContentItem[]>) => {
            state.items = action.payload;
            state.filteredItems = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setKeyword: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload;
        },
        setPricingOptions: (state, action: PayloadAction<any>) => {
            state.pricingOptions = action.payload;
        },
        filterData: (state) => {
            let filteredData = [...state.items];

            const { pricingOptions, keyword } = state;


            if (pricingOptions.length > 0) {
                filteredData = filteredData.filter((item: any) => {
                    const isPaid = pricingOptions.includes('paid') && item.pricingOption === 0;
                    const isFree = pricingOptions.includes('free') && item.pricingOption === 1;
                    const isViewOnly = pricingOptions.includes('viewOnly') && item.pricingOption === 2;

                    return isPaid || isFree || isViewOnly;
                });
            }


            if (state.keyword) {
                const keywordLower = state.keyword.toLowerCase();
                filteredData = filteredData.filter(item => {
                    const title = item.title?.toLowerCase() || '';
                    const userName = item.creator?.toLowerCase() || '';
                    return title.includes(keywordLower) || userName.includes(keywordLower);
                });
            }

            state.filteredItems = filteredData;
        },

        resetFilters: (state) => {
            state.pricingOptions = [];
        },

    },
    extraReducers: (reducer) => {
        reducer
            .addCase(fetchClosetData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClosetData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch contents';
            })
            .addCase(fetchClosetData.fulfilled, (state) => {
                state.loading = false;
            })
    }
})

export const {
    setData,
    setLoading,
    setError,
    setKeyword,
    filterData,
    setPricingOptions,
    resetFilters
} = closetSlice.actions;

export default closetSlice.reducer;