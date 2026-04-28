import { baseApi } from "../../../shared/api/baseApi";
import type { TUserLogin, TUserRegister, TUserResponse } from "../model/index.types";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<TUserResponse, TUserRegister>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData
            }),
            invalidatesTags: ['User']
        }),
        login: builder.mutation<TUserResponse, TUserLogin>({
            query: (userData) => ({
                url: '/auth/login',
                method: 'POST',
                body: userData
            }),
            invalidatesTags: ['User']
        }),
        logout: builder.mutation<void, { accessToken: string }>({
            query: ({ accessToken }) => ({
                url: '/auth/logout',
                method: 'POST',
                body: { accessToken }
            }),
            invalidatesTags: ['User']
        }),
    })
})


export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi