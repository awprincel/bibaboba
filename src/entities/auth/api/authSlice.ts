import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { TInitialState, TUserResponse } from "../model/index.types"
import { ELSNames } from "../../../shared/config/enums"

const storedUser = localStorage.getItem('user')
const isAuth = (localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')) ? true : false

const initialState: TInitialState = {
    isAuth,
    user: JSON.parse(storedUser!) || null,
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
            state.isAuth = false

            localStorage.clear()
        },
        setAuth: (state, action: PayloadAction<TUserResponse>) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.isAuth = true

            localStorage.setItem(ELSNames.ACCESS_TOKEN, action.payload.accessToken)
            localStorage.setItem(ELSNames.REFRESH_TOKEN, action.payload.refreshToken)
            localStorage.setItem(ELSNames.USER, JSON.stringify(action.payload.user))
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload

            localStorage.setItem(ELSNames.ACCESS_TOKEN, action.payload)
        }

    }
})

export const { logout, setAuth, setToken } = authSlice.actions
export default authSlice.reducer