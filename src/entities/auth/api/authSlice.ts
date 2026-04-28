import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { TInitialState } from "../model/index.types"

const storedUser = localStorage.getItem('user')

const initialState : TInitialState = {
    user: JSON.parse(storedUser) || null,
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.accessToken = null
            state.refreshToken = null

            localStorage.clear()
        },

        setAuth: (state, action : PayloadAction<TInitialState>) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        }
    }
})

export const { logout, setAuth } = authSlice.actions
export default authSlice.reducer