import { baseApi } from "../../../shared/api/baseApi";
import type { ISpace, TSpaceDTO } from "../model/types";

export const spacesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpaces: builder.query<ISpace[], void>({
            query: () => "/spaces",
            providesTags: (result) => result ? [...result.map(({ id }) => ({ type: "Space" as const, id })), { type: "Space", id: "LIST" }] : [{ type: "Space", id: "LIST" }]
        }),
        getSpace: builder.query<ISpace, number>({
            query: (id) => `/spaces/${id}`,
            providesTags: (result) => [{ type: "Space", id: result?.id }, { type: "Space", id: "LIST" }]
        }),
        createSpace: builder.mutation<ISpace, TSpaceDTO>({
            query: (body) => ({
                url: "/spaces",
                method: "POST",
                body
            }),
            invalidatesTags: (result) => [{ type: "Space", id: result?.id }, { type: "Space", id: "LIST" }]
        }),
        deleteSpace: builder.mutation<void, number>({
            query: (id) => ({
                url: `/spaces/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: () => ["Space"]
        }),
        updateSpace: builder.mutation<ISpace, { id: number, data: TSpaceDTO }>({
            query: ({ id, data }) => ({
                url: `/spaces/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result) => [{ type: "Space", id: result?.id }, { type: "Space", id: "LIST" }]
        }),
    })
})

export const { useCreateSpaceMutation, useDeleteSpaceMutation, useGetSpaceQuery, useGetSpacesQuery, useUpdateSpaceMutation } = spacesApi