import { Navigate } from "react-router";
import { useAppSelector } from "../provider/store/hooks";
import { routePaths } from "../../shared/config/routePaths";
import type { PropsWithChildren } from "react";

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const { isAuth } = useAppSelector(state => state.auth)

    if (!isAuth) return <Navigate to={routePaths.login} replace />
    return <>{children}</>
}
