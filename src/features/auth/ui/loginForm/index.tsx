import { useForm } from "react-hook-form";
import type { TUserLogin } from "../../../../entities/auth/model/index.types";
import { LoginSchema, type TLoginSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../../../../entities/auth/api/authApi";
import { useNavigate } from "react-router";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Авторизация</h1>

        <label>
          Email
          <input type="text" {...register("email")} />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </label>

        <label>
          Password
          <input type="text" {...register("password")} />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
