import { createSlice } from "@reduxjs/toolkit";

export type NoteType = {
    id: number,
    content: string,
    createdAt: string,
    updatedAt?: Date,
    color: string
}

const addNoteSlice = createSlice({
    name: "addNote",
    initialState: JSON.parse(localStorage.getItem("notes") || "[]") as NoteType[],
    reducers: {
        newNote: (state: NoteType[], action) => {
            state.push(action.payload)
            localStorage.setItem("notes", JSON.stringify([...state]))        
        }
    }
})

export const { newNote } = addNoteSlice.actions
export default addNoteSlice.reducer