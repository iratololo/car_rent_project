import { createSlice } from '@reduxjs/toolkit'

import { handleGetCars } from "./handlers";
import { getCarsThunk } from "./thunks";

const initialState = {
    cars: {
        items: [],
        page: 1,
    },
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
     reducers: {
         changePage: (state, { payload }) => {
           state.cars.page=payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCarsThunk.fulfilled, handleGetCars)
        // .addCase(addContactsThunk.fulfilled, handleAddContacts)
        // .addCase(removeContactsThunk.fulfilled, handleRemoveContacts)
        // .addCase(updateContactsThunk.fulfilled, handleUpdateContact)
    }
    
})

export const carsReducer = carsSlice.reducer;
export const {changePage} = carsSlice.actions;