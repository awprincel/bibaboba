import { useNavigate } from "react-router";
import { routePaths } from "../../shared/config/routePaths";
import styles from './index.module.scss'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.home__content}>
        <h1 className={styles.home__title}>
          Найди свое идеальное <span>рабочее место</span>
        </h1>
        <p className={styles.home__description}>
          Современные коворкинги для продуктивной работы. 
          Бронируй зоны, переговорные и рабочие места в пару кликов.
        </p>
        <button 
          className={styles.home__btn}
          onClick={() => navigate(routePaths.spaces)}
        >
          Смотреть пространства
        </button>
      </div>
    </div>
  );
};

export default HomePage;
