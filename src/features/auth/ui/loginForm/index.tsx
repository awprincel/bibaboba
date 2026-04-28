import { useForm } from "react-hook-form";
import type { TUserLogin } from "../../../../entities/auth/model/index.types";
import { LoginSchema, type TLoginSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../../../../entities/auth/api/authApi";
import { useNavigate } from "react-router";
import styles from './index.module.scss'

export const LoginForm = () => {
  const [apiRegister] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (userData: TUserLogin) => {
    const res = apiRegister(userData).unwrap();

    if (res) {
      alert("успех");
      reset();
      navigate("/");
    } else {
      alert("not");
    }
  };

    return (
    <div className={styles["auth-container"]}>
      <form className={styles["auth-form"]} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles["auth-form__title"]}>Авторизация</h1>

        <div className={styles["auth-form__group"]}>
          <label className={styles["auth-form__label"]}>Email</label>
          <input 
            type="email" 
            className={`${styles["auth-form__input"]} ${errors.email ? styles["auth-form__input--error"] : ""}`}
            {...register("email")} 
            placeholder="example@mail.com"
          />
          {errors.email && <span className={styles["auth-form__error"]}>{errors.email.message}</span>}
        </div>

        <div className={styles["auth-form__group"]}>
          <label className={styles["auth-form__label"]}>Пароль</label>
          <input 
            type="password"
            className={`${styles["auth-form__input"]} ${errors.password ? styles["auth-form__input--error"] : ""}`}
            {...register("password")} 
            placeholder="••••••••"
          />
          {errors.password && <span className={styles["auth-form__error"]}>{errors.password.message}</span>}
        </div>

        <button className={styles["auth-form__submit"]} type="submit">Войти</button>
      </form>
    </div>
  );
};
