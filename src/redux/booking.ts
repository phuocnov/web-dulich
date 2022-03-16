import { createSlice } from "@reduxjs/toolkit";
import * as storage from "../helper/storage";

const slice  = createSlice({
    name: 'booking',
    initialState: {},
    reducers: {
        get: state => {
            
        }
    }
})
export const bookingAction = slice.actions
export const bookingReducer = slice.reducer