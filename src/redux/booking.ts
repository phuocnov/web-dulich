import { createSlice } from "@reduxjs/toolkit";
import * as storage from "../helper/storage";

const slice  = createSlice({
    name: 'booking',
    initialState: {
        listBooking: <any>[]
    },
    reducers: {
        get: (state, action) => {
            
        }
    }
})
export const bookingAction = slice.actions
export const bookingReducer = slice.reducer