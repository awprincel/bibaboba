import { baseApi } from "../../../shared/api/baseApi";
import type { TUserLogin, TUserRegister, TUserResponse } from "../model/index.types";
import { setAuth } from "./authSlice";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<TUserResponse, TUserRegister>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled
                    localStorage.setItem('user', JSON.stringify(data));

                    dispatch(setAuth({
                        user: data,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken
                    }));
                } catch (err) {
                    console.error(err)
                }
            },
            invalidatesTags: ['User']
        }),


        login: builder.mutation<TUserResponse, TUserLogin>({
            query: (userData) => ({
                url: '/auth/login',
                method: 'POST',
                body: userData
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled
                    localStorage.setItem('user', JSON.stringify(data));

                    dispatch(setAuth({
                        user: data,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken
                    }));
                } catch (err) {
                    console.error(err)
                }
            },
            invalidatesTags: ['User']
        })
    })
})


export const { useLoginMutation, useRegisterMutation } = authApi