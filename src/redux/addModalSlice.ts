import { createSlice } from "@reduxjs/toolkit";


export type AddModalType = {
    value: boolean
}

const addModalSlice = createSlice({
    name: "addModal",
    initialState: {value: false} as AddModalType,
    reducers : {
        toggleAddModal: (state) => {state.value = !state.value }
    }
})

export const { toggleAddModal } = addModalSlice.actions
export default addModalSlice.reducer