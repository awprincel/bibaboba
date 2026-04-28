import styles from './styles.module.scss'

const Loader = () => {
  return (
    <div className={styles["loader-overlay"]}>
      <div className={styles["loader-overlay__spinner"]}></div>
    </div>
  );
};

export default Loader
