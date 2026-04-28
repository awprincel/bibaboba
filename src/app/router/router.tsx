import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { routePaths } from "../../shared/config/routePaths";
import { lazy } from "react";
import ProtectedRoute from "./protectedRoute";

const HomePage = lazy(() => import("../../pages/home"))
const NotFoundPage = lazy(() => import("../../pages/notFound"))
const SpacesPage = lazy(() => import("../../pages/spaces/allSpaces"))
const SpaceDetailsPage = lazy(() => import("../../pages/spaces/oneSpace"))
const LoginPage = lazy(() => import("../../pages/loginPage"))
const RegisterPage = lazy(() => import("../../pages/registerPage"))
const ProfilePage = lazy(() => import("../../pages/profile"))

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
                path: routePaths.notFound,
                element: <NotFoundPage />
            },
        ]
    }
])