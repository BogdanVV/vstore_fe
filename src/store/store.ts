import { configureStore } from "@reduxjs/toolkit";

import { mainPageSlice } from './slices/mainPageSlice';

export const store = configureStore({
    reducer: {
        mainPage: mainPageSlice.reducer,
    },
    devTools: true
});
