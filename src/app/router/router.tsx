import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { routePaths } from "../../shared/config/routePaths";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/home"))
const NotFoundPage = lazy(() => import("../../pages/notFound"))
const SpacesPage = lazy(() => import("../../pages/spaces/allSpaces"))
const SpacePage = lazy(() => import("../../pages/spaces/oneSpace"))

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
                element: <SpacePage />
            },
            {
                path: routePaths.notFound,
                element: <NotFoundPage />
            },
        ]
    }
])