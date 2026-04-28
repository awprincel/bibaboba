import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../../shared/api/baseApi";
import authReducer from '../../../entities/auth/api/authSlice'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootStata = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch