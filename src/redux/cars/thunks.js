import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCars } from "../../api/api";

// export const getCarsThunk = createAsyncThunk('cars/getCars', async (_, { rejectWithValue, getState }) => {
//     const token = getState().auth.token;
//     try {
//         const { data } = await getContactsApi(token);
//     return data;
//     } catch (error) {
//         return rejectWithValue(error.message)
//     }
// })

export const getCarsThunk = createAsyncThunk('cars/getCars', async (_, { rejectWithValue }) => {
    try {
        const { data } = await getAllCars();
    return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})