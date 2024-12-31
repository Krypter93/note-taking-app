import { createSlice } from "@reduxjs/toolkit";

type NoteColorType = {
    value: string
}

const initialState: NoteColorType = {
    value: ""
}

const noteColorSlice = createSlice({
    name: "noteColor",
    initialState,
    reducers: {
        setNoteColor: ((state, action) => {
            state.value = action.payload
        }),

        clearNoteColor: ((state) => {
            state.value = ""
        })
    }
})

export const { setNoteColor, clearNoteColor } = noteColorSlice.actions
export default noteColorSlice.reducer