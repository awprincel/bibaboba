import { ERoutePaths } from "./enums";

export const routePaths = {
    [ERoutePaths.HOME]: "/",
    [ERoutePaths.REGISTER]: "/auth/register",
    [ERoutePaths.LOGIN]: "/auth/login",
    [ERoutePaths.SPACES]: "/spaces",
    [ERoutePaths.SPACE]: "/spaces/:id",
    [ERoutePaths.BOOKINGS]: "/bookings",
    [ERoutePaths.BOOKING]: "/bookings/:id",
    [ERoutePaths.NOT_FOUND]: "*",
} as const