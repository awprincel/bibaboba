import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../config/consts";
import { ELSNames } from "../config/enums";
import { createApi } from "@reduxjs/toolkit/query/react";

interface RefreshResult {
    accessToken: string
}

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(ELSNames.ACCESS_TOKEN);
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }

        return headers
    }
})

export const baseQueryWithRefetch: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        const refreshToken = localStorage.getItem(ELSNames.REFRESH_TOKEN)

        if (refreshToken) {
            const resultRefresh = await baseQuery({
                url: "/auth/refresh",
                method: "POST",
                body: { refreshToken }
            }, api, extraOptions)

            if (!resultRefresh.error) {
                const newAccessToken = (resultRefresh.data as RefreshResult).accessToken
                if (newAccessToken) {
                    localStorage.setItem(ELSNames.ACCESS_TOKEN, newAccessToken)
                    result = await baseQuery(args, api, extraOptions)
                }
            }
        }
    }

    return result
}

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithRefetch,
    endpoints: () => ({}),
    tagTypes: ["User", "Space", "Booking"]
})