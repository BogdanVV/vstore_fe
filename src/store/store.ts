import { configureStore } from "@reduxjs/toolkit";
import { mainPageSlice } from './slices/mainPageSlice';
import { fittingRoomSlice } from './slices/fittingRoomSlice';

export const store = configureStore({
    reducer: {
        mainPage: mainPageSlice.reducer,
        fittingRoom: fittingRoomSlice.reducer,
    },
})
