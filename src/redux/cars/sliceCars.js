import { createSlice } from '@reduxjs/toolkit'

import { handleGetCars } from "./handlers";
import { getCarsThunk } from "./thunks";

const initialState = {
    cars: {
        items: [],
    },
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCarsThunk.fulfilled, handleGetCars)
        // .addCase(addContactsThunk.fulfilled, handleAddContacts)
        // .addCase(removeContactsThunk.fulfilled, handleRemoveContacts)
        // .addCase(updateContactsThunk.fulfilled, handleUpdateContact)
    }
    
})

export const carsReducer = carsSlice.reducer;