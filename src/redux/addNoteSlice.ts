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
        },
        
        deleteNote: ((state: NoteType[], action) => {
            const filteredNotes = state.filter(note => note.id !== action.payload.id)
            localStorage.setItem("notes", JSON.stringify(filteredNotes))
            return filteredNotes
        })
    }
})

export const { newNote, deleteNote } = addNoteSlice.actions
export default addNoteSlice.reducer