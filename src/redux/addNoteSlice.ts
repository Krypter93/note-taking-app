import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NoteType = {
    id: number,
    content: string,
    createdAt: Date,
    updatedAt?: Date,
    color: string
}

const addNoteSlice = createSlice({
    name: "addNote",
    initialState: (() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]")
        return (storedNotes as NoteType[]).map(note => ({
            ...note,
            createdAt: new Date(note.createdAt),
            updatedAt: note.updatedAt ? new Date(note.updatedAt) : undefined
        }))
    })(),
    reducers: {
        newNote: (state: NoteType[], action: PayloadAction<NoteType>) => {
            state.push(action.payload)
            localStorage.setItem("notes", JSON.stringify(state))        
        },
        
        deleteNote: ((state, action: PayloadAction<{id: number}>) => {
            const filteredNotes = state.filter(note => note.id !== action.payload.id)
            localStorage.setItem("notes", JSON.stringify(filteredNotes))
            return filteredNotes
        }),
        
        modifyNote: ((state, action: PayloadAction<{id: number, newContent: string}>) => {
            const {id, newContent} = action.payload
            const noteToUpdate = state.find(note => note.id === id)
            if (noteToUpdate) {
                noteToUpdate.content = newContent
                noteToUpdate.updatedAt = new Date()
                state = [...state.filter(note => note.id !== id), noteToUpdate]
                localStorage.setItem("notes", JSON.stringify(state))
            }
        }),

        sortByDate: ((state, action: PayloadAction<string>) => {
            if (action.payload == "newest") {
                return [...state].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            } else {
                return [...state].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
            }
        })
    }
})

export const { newNote, deleteNote, modifyNote, sortByDate } = addNoteSlice.actions
export default addNoteSlice.reducer