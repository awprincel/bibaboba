import { routePaths } from "../../config/routePaths";
import { useDispatch, useSelector } from "react-redux";
import type { RootStata } from "../../../app/provider/store/store";
import { logout } from "../../../entities/auth/api/authSlice";
import { Link, useLocation } from "react-router";
import styles from './index.module.scss'

export const Header = () => {
  const { user } = useSelector((state: RootStata) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? styles["header__link--active"] : "";

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        {user ? (
          <>
            <Link 
              to={routePaths.spaces} 
              className={`${styles.header__link} ${isActive(routePaths.spaces)}`}
            >
              Spaces
            </Link>
            <Link 
              to={routePaths.bookings} 
              className={`${styles.header__link} ${isActive(routePaths.bookings)}`}
            >
              Bookings
            </Link>
            <Link 
              to={routePaths.login} 
              className={`${styles.header__link} ${styles["header__link--logout"]}`}
              onClick={() => dispatch(logout())}
            >
              Logout ({user.user?.role || 'User'})
            </Link>
          </>
        ) : (
          <div className={styles["header__auth-group"]}>
            <Link to={routePaths.register} className={styles.header__link}>
              Register
            </Link>
            <Link to={routePaths.login} className={styles.header__link}>
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
