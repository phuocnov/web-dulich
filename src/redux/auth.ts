import { createSlice } from "@reduxjs/toolkit";
import * as storage from "../helper/storage";
const slice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        authkey: ''
    },
    reducers: {
        login: state => {
            state.isLogin = true
            state.authkey = storage.default.get('token')
        },
        logout: state => {
            state.isLogin = false
            storage.default.clear()
        }
    }
})

export const authAction = slice.actions
export const authReducer = slice.reducer