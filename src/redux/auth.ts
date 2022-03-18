import { createSlice } from "@reduxjs/toolkit";
import * as storage from "../helper/storage";
const slice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        authkey: ''
    },
    reducers: {
        login: (state, action) => {
            const { auth } = action.payload
            state.isLogin = true
            state.authkey = auth
        },
        logout: state => {
            state.isLogin = false
        }
    }
})

export const authAction = slice.actions
export const authReducer = slice.reducer