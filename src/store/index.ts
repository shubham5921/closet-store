import { configureStore } from '@reduxjs/toolkit';
import closetReducer from './contentsSlice'

export const store = configureStore({
    reducer: {
        closetData: closetReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;