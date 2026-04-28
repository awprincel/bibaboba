import { ERoutePaths } from "./enums";

export const routePaths = {
    [ERoutePaths.HOME]: "/",
    [ERoutePaths.REGISTER]: "/auth/register",
    [ERoutePaths.LOGIN]: "/auth/login",
    [ERoutePaths.SPACES]: "/spaces",
    [ERoutePaths.SPACE]: "/spaces/:id",
    [ERoutePaths.BOOKINGS]: "/bookings",
    [ERoutePaths.MY_BOOKINGS]: "/my-bookings",
    [ERoutePaths.MANAGE_BOOKINGS]: "/manage-bookings",
    [ERoutePaths.BOOKING]: "/bookings/:id",
    [ERoutePaths.REVIEWS]: "/reviews",
    [ERoutePaths.PROFILE]: "/profile",
    [ERoutePaths.NOT_FOUND]: "*",
} as const