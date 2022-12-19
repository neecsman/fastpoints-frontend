import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { AddressSuggestions } from "react-dadata";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { Button, CustomDatepicker } from "../../Components";
import { useSendCandidateMailMutation } from "../../redux/API/mailApiSlice";
import style from "./candidate.module.scss";
const Candidate = () => {
  const [formData, setFormData] = useState({});

  const [sendCandidateMail] = useSendCandidateMailMutation();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value.value || value });
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const id = toast.loading("Отправляем ваши данные...");
    try {
      const data = await sendCandidateMail(formData).unwrap();

      toast.update(id, {
        render: "Ваша анкета успешно отправлена! Скоро мы с вами свяжемся!",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
      reset();
    } catch (error) {
      toast.update(id, {
        render: "Упс, что-то пошло не так...",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <form
      onChange={(e) => handleOnChange(e)}
      className={style.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1>Форма анкеты</h1>

      <div className={style.form_group}>
        <div>
          {" "}
          <label>Фамилия:</label>
          <input
            type="text"
            {...register("lastname", {
              required: true,
              validate: (value) => value !== "",
            })}
            placeholder="Иванов"
          />
          {errors.lastname && <p>Введите Вашу фамилию</p>}
        </div>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            {...register("firstname", {
              required: true,
              validate: (value) => value !== "",
            })}
            placeholder="Петр"
          />
          {errors.firstname && <p>Введите Ваше имя</p>}
        </div>
      </div>

      <div className={style.form_group}>
        <div>
          <label>Отчество:</label>
          <input
            type="text"
            {...register("middlename", {
              required: true,
              validate: (value) => value !== "",
            })}
            placeholder="Алексеевич"
          />
          {errors.middlename && <p>Введите Ваше отчество</p>}
        </div>
        <div>
          <label>Дата рождения:</label>
          <Controller
            control={control}
            name="birthday"
            // rules={{ required: true }}
            render={() => (
              <>
                <CustomDatepicker
                  formData={formData}
                  setFormData={setFormData}
                  start
                />
              </>
            )}
          />

          {/* {errors.birthday && <p>Возраст не соответствует требованиям</p>} */}
        </div>
      </div>

      <div className={style.form_group}>
        <div>
          <label>Серия и номер паспорта:</label>
          <Controller
            control={control}
            name="pasport_serial"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <>
                <InputMask
                  {...register("pasport_serial", {
                    required: true,
                    validate: (value) => value !== "",
                  })}
                  name="pasport_serial"
                  mask="99 99 999999"
                  maskChar={null}
                  placeholder="00 00 000000"
                >
                  {(inputProps) => <input {...inputProps} type="text" />}
                </InputMask>
              </>
            )}
          />
          {errors.pasport_serial && <p>Введите серию и номер паспорта</p>}
        </div>
        <div>
          <label>Дата выдачи паспорта:</label>
          <Controller
            control={control}
            name="pass_date"
            // rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <>
                <CustomDatepicker
                  formData={formData}
                  setFormData={setFormData}
                  end
                />
              </>
            )}
          />

          {/* {errors.pass_date && <p>Дата выдачи не соответствует возрасту</p>} */}
        </div>
      </div>

      <div className={style.form_group}>
        <div className={style.adress}>
          <label>Адрес регистрации:</label>
          <Controller
            control={control}
            name="reg_adress"
            render={({ field }) => (
              <>
                <AddressSuggestions
                  {...register("reg_adress", {
                    required: true,
                    validate: (value) => value !== "",
                    onChange: (e) => handleOnChange(e),
                  })}
                  {...field}
                  count={5}
                  inputProps={{
                    placeholder: "г. Москва ул. Новый Арбат 12",
                    style: { width: "100%" },
                    name: "reg_adress",
                  }}
                  token="eb9dbc9d8b76b68399bd5aa3a3e5c7c31557e11d"
                ></AddressSuggestions>
              </>
            )}
          />

          {errors.reg_adress && <p>Укажите адрес вашей регистрации</p>}
        </div>
      </div>

      <div className={style.form_group}>
        <div>
          <label>Индекс:</label>
          <Controller
            control={control}
            name="index"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <>
                <InputMask
                  {...register("index", {
                    required: true,
                    validate: (value) => value !== "",
                  })}
                  name="index"
                  mask="999999"
                  maskChar={null}
                  placeholder="000000"
                >
                  {(inputProps) => <input {...inputProps} type="text" />}
                </InputMask>
              </>
            )}
          />
          {errors.index && <p>Введите индекс</p>}
        </div>
        <div className={style.tel}>
          <label>Номер телефона:</label>
          <Controller
            control={control}
            name="phone"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <>
                <PhoneInput
                  inputClass="shadow-none"
                  placeholder="+7 (999) 999-99-99"
                  onChange={onChange}
                  value={value}
                  country={"ru"}
                  disableDropdown={true}
                  inputProps={{ name: "phone" }}
                />
              </>
            )}
          />
          {errors["phone"] && <p>Введите номер телефона</p>}
        </div>
        <div>
          <label>Почта:</label>
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
      </div>

      <div className="flex justify-center">
        <Button primary>Отправить анкету</Button>
      </div>
      <div className="mt-5 text-center text-gray">
        Нажимая кнопку "Отправить анкету", вы соглашаетесь с{" "}
        <a className="hover:text-green" href="/">
          политикой обработки персональных данных
        </a>{" "}
      </div>
    </form>
  );
};

export default Candidate;
