import { baseApi } from "../../../shared/api/baseApi";
import type { TBooking, TBookingDTO } from "../model/index.types";

export const bookingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query<TBooking[], void>({
            query: () => "/bookings",
            providesTags: (result) => result ? [...result.map(({ id }) => ({ type: "Booking" as const, id })), { type: "Booking", id: "LIST" }] : [{ type: "Booking", id: "LIST" }]
        }),
        getBooking: builder.query<TBooking, number>({
            query: (id) => `/bookings/${id}`,
            providesTags: (result) => [{ type: "Booking", id: result?.id }, { type: "Booking", id: "LIST" }]
        }),
        createBooking: builder.mutation<TBooking, TBookingDTO>({
            query: (body) => ({
                url: "/bookings",
                method: "POST",
                body
            }),
            invalidatesTags: (result) => [{ type: "Booking", id: result?.id }, { type: "Booking", id: "LIST" }]
        }),
        updateBookingStatus: builder.mutation<TBooking, { id: number, status: 'approved' | 'rejected' }>({
            query: ({ id, status }) => ({
                url: `/bookings/${id}/status`,
                method: "PATCH",
                body: { status }
            }),
             invalidatesTags: (result) => [{ type: "Booking", id: result?.id }, { type: "Booking", id: "LIST" }]
        }),
    })
})

export const { useCreateBookingMutation, useGetBookingQuery, useGetBookingsQuery, useUpdateBookingStatusMutation } = bookingsApi