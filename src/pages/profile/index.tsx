import { useAppSelector } from "../../app/provider/store/hooks";
import styles from './index.module.scss'

const ProfilePage = () => {
  const auth = useAppSelector((state) => state.auth);
  const user = auth.user || auth.user; 

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-card"]}>
        <div className={styles["profile-card__header"]}>
          <h1 className={styles["profile-card__title"]}>Личный кабинет</h1>
        </div>

        <div className={styles["profile-card__info-group"]}>
          <div className={styles["profile-card__item"]}>
            <span>Имя</span>
            <span>{user?.name || "Не указано"}</span>
          </div>

          <div className={styles["profile-card__item"]}>
            <span>Электронная почта</span>
            <span>{user?.email}</span>
          </div>

          <div className={styles["profile-card__item"]}>
            <span>Ваша роль</span>
            <span className={styles["profile-card__role"]}>
              {user?.role?.toUpperCase()}
            </span>
          </div>

          <div className={styles["profile-card__item"]}>
            <span>Статус аккаунта</span>
            <div className={`${styles["profile-card__status"]} ${
              user?.isActive 
                ? styles["profile-card__status--active"] 
                : styles["profile-card__status--inactive"]
            }`}>
              {user?.isActive ? "● Активен" : "● Не активен"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
