import { createSlice } from "@reduxjs/toolkit";

type NoteContentType = {
    text: string
}

const initialState: NoteContentType = {
    text: ""
}

const noteContentSlice = createSlice({
    name: "noteContent",
    initialState,
    reducers: {
        setText: ((state, action) => {
            state.text = action.payload
        }),

        clearText: ((state) => {
            state.text = ""
        })
    }
})

export const { setText, clearText } = noteContentSlice.actions
export default noteContentSlice.reducer