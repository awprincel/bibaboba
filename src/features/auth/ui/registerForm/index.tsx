import { useForm } from "react-hook-form";
import type { TUserRegister } from "../../../../entities/auth/model/index.types";
import { RegisterSchema, type TRegisterSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../../../../entities/auth/api/authApi";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const [apiRegister] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (userData: TUserRegister) => {
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
        <h1>Регистрация</h1>

        <label>
          Username
          <input type="text" {...register("name")} />
          {errors.name && <div className="error">{errors.name.message}</div>}
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
