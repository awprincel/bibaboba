import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { routePaths } from "../../shared/config/routePaths";
import { lazy } from "react";
import { BookingsList } from "../../features/booking/ui/bookingsList";
import { RegisterPage } from "../../pages/registerPage";
import { LoginPage } from "../../pages/loginPage";
import { SpaceDetailsPage } from "../../pages/SpaceDetailsPage";

const HomePage = lazy(() => import("../../pages/home"))
const NotFoundPage = lazy(() => import("../../pages/notFound"))
const SpacesPage = lazy(() => import("../../pages/spaces/allSpaces"))

export const router = createBrowserRouter([
    {
        path: routePaths.home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: routePaths.spaces,
                element: <SpacesPage />
            },
            {
                path: routePaths.space,
                element: <SpaceDetailsPage />
            },

            {
                path: routePaths.bookings,
                element: <BookingsList />
            },

            {
                path: routePaths.register,
                element: <RegisterPage />
            },
            {
                path: routePaths.login,
                element: <LoginPage />
            },

            {
                path: routePaths.notFound,
                element: <NotFoundPage />
            },
        ]
    }
])