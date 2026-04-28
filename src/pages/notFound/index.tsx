import { useEffect, useState } from "react";
import styles from './index.module.scss'
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={styles["not-found"]}>
      <div className={styles["not-found__bg-glow"]} />

      <div 
        className={styles["not-found__content"]}
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <h1 className={styles["not-found__code"]}>404</h1>
        <h2 className={styles["not-found__title"]}>Упс! Вы потерялись</h2>
        <p className={styles["not-found__text"]}>
          Страница, которую вы ищете, не существует или была перенесена в другое пространство.
        </p>
        <button 
          className={styles["not-found__btn"]}
          onClick={() => navigate("/")}
        >
          Вернуться домой
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
