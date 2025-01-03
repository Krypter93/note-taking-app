import { createSlice } from "@reduxjs/toolkit";

export type NoteType = {
    id: number,
    content: string,
    createdAt: string,
    updatedAt?: string,
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
        }),
        
        modifyNote: ((state: NoteType[], action) => {
            const {id, newContent} = action.payload
            const noteToUpdate = state.find(note => note.id === id)
            if (noteToUpdate) {
                noteToUpdate.content = newContent
                noteToUpdate.updatedAt = new Date().toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"})
                state = [...state.filter(note => note.id !== id), noteToUpdate]
                localStorage.setItem("notes", JSON.stringify(state))
            }
        })
    }
})

export const { newNote, deleteNote, modifyNote } = addNoteSlice.actions
export default addNoteSlice.reducer