import { Link } from "react-router";
import { routePaths } from "../../config/routePaths";
import { useDispatch, useSelector } from "react-redux";
import type { RootStata } from "../../../app/provider/store/store";
import { logout } from "../../../entities/auth/api/authSlice";
import styles from "./index.module.scss"
import { useLogoutMutation } from "../../../entities/auth/api/authApi";
import { ELSNames } from "../../config/enums";

export const Header = () => {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state: RootStata) => state.auth);
  const [logoutUser] = useLogoutMutation()

  const logoutHandler = () => {
    logoutUser({ accessToken: localStorage.getItem(ELSNames.ACCESS_TOKEN)! })
    dispatch(logout())
  }

  return (
    <nav className={styles.nav}>
      <Link to={routePaths.home}>Home</Link>
      <Link to={routePaths.spaces}>Spaces</Link>

      {user?.role === "manager" && <Link to={routePaths.manageBookings}>Manage Bookings</Link>}
      {(user?.isActive && isAuth) && <Link to={routePaths.profile}>Profile</Link>}

      {!isAuth && (
        <>
          <Link to={routePaths.register}>Register</Link>
          <Link to={routePaths.login}>Login</Link>
        </>
      )}
      {isAuth && (
        <Link to={routePaths.login} onClick={logoutHandler}>
          Logout
        </Link>
      )}
    </nav>
  );
};
