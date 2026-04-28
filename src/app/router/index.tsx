import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { routePaths } from "../../shared/config/routePaths";
import { RegisterPage } from "../../pages/registerPage";
import { LoginPage } from "../../pages/loginPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: routePaths.register,
                element: <RegisterPage />
            },

            {
                path: routePaths.login,
                element: <LoginPage />
            }
        ]
    }
])