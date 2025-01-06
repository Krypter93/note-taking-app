import { configureStore } from "@reduxjs/toolkit";
import AddModalSliceReducer from "./addModalSlice";
import AddNoteSliceReducer from "./addNoteSlice";
import noteContentReducer from "./noteContent";
import noteColorReducer from "./noteColorSlice";

export const store = configureStore({
    reducer: {
        addModal: AddModalSliceReducer,
        notes: AddNoteSliceReducer,
        noteContent: noteContentReducer,
        noteColor: noteColorReducer,
    }
})

// Get the type of the store variable
export type AppStore = typeof store

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<AppStore["getState"]>

