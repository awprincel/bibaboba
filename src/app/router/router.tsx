import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { routePaths } from "../../shared/config/routePaths";
import { lazy } from "react";
import ProtectedRoute from "./protectedRoute";
import Loader from "../../shared/ui/loader";

const HomePage = lazy(() => import("../../pages/home"))
const NotFoundPage = lazy(() => import("../../pages/notFound"))
const SpacesPage = lazy(() => import("../../pages/spaces/allSpaces"))
const SpaceDetailsPage = lazy(() => import("../../pages/SpaceDetailsPage"))
const LoginPage = lazy(() => import("../../pages/loginPage"))
const RegisterPage = lazy(() => import("../../pages/registerPage"))
const ProfilePage = lazy(() => import("../../pages/profile"))
const BookingsPage = lazy(() => import("../../pages/bookingsPage"))

export const router = createBrowserRouter([
    {
        path: routePaths.home,
        hydrateFallbackElement: <Loader />,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
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
                path: routePaths.spaces,
                element:
                    <ProtectedRoute>
                        <SpacesPage />
                    </ProtectedRoute>
            },
            {
                path: routePaths.space,
                element:
                    <ProtectedRoute>
                        <SpaceDetailsPage />
                    </ProtectedRoute>
            },
            {
                path: routePaths.profile,
                element:
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
            },

            {
                path: routePaths.bookings,
                element: <BookingsPage />
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