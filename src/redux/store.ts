import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './index'

const rootReducer = {
    auth: reducers.authReducer
}

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
