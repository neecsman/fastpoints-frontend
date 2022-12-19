import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "../../../Components";
import { useRecoveryMutation } from "../../../redux/API/authApiSlice";

import style from "../Login/login.module.scss";

const Recovery = () => {
  const [recovery] = useRecoveryMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (value) => {
    console.log(value);
    const id = toast.loading("Генерируем вам новый пароль 😎");
    try {
      await recovery(value).unwrap();
      toast.update(id, {
        render: "Отправили вам на почту новый пароль!",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(id, {
        render: `${error.data.message} 😱`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[500px]">
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-white text-center text-3xl mb-6">
          Восстановление пароля
        </h1>
        <div className={style.form_group}>
          <div>
            <label>E-mail:</label>
            <input
              {...register("email", {
                required: true,
                validate: (value) => value !== "",
              })}
              type="email"
              placeholder="ivaninf@yandex.com"
            />

            {errors.email && <p>Введите Вашу почту</p>}
          </div>
          <Button auth>Восстановить пароль</Button>
        </div>

        <div className="flex justify-between text-white text-opacity-60 mt-4">
          <Link className="hover:text-green" to="/login">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Recovery;
