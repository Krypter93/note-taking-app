import { configureStore } from "@reduxjs/toolkit";
import AddModalSliceReducer from "./addModalSlice";

export const store = configureStore({
    reducer: {
        addModal: AddModalSliceReducer
    }
})

// Get the type of the store variable
export type AppStore = typeof store

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<AppStore["getState"]>

