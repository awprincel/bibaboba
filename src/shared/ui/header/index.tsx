import { Link } from "react-router";
import { routePaths } from "../../config/routePaths";
import { useDispatch, useSelector } from "react-redux";
import type { RootStata } from "../../../app/provider/store/store";
import { logout } from "../../../entities/auth/api/authSlice";

export const Header = () => {
  const { user } = useSelector((state: RootStata) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      {user && (
        <Link to={routePaths.login} onClick={() => dispatch(logout())}>
          Logout
        </Link>
      )}

      {!user && (
        <>
          <Link to={routePaths.register}>Register</Link>
          <Link to={routePaths.login}>Login</Link>
        </>
      )}
    </nav>
  );
};
