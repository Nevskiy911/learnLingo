import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import Modal from "../Modal/Modal";
import s from "../AuthModal/AuthModal.module.css";

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

export default function RegisterModal({ onClose }) {
  const { register: signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password, data.name);
      onClose();
    } catch (err) {
      alert("Register failed: " + err.message);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrapper}>
        <div>
          <h2 className={s.title}>Registration</h2>
          <p className={s.description}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <label className={s.label}>
            <input
              type="text"
              {...register("name")}
              className={s.input}
              placeholder="Name"
              autoComplete="username"
            />
            {errors.name && <p className={s.error}>{errors.name.message}</p>}
          </label>

          <label className={s.label}>
            <input
              type="email"
              {...register("email")}
              className={s.input}
              placeholder="Email"
              autoComplete="email"
            />
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
          </label>

          <label className={s.label}>
            <input
              type="password"
              {...register("password")}
              className={s.input}
              placeholder="Password"
              autoComplete="new-password"
            />
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
          </label>

          <button type="submit" className={s.submitBtn}>
            Register
          </button>
        </form>
      </div>
    </Modal>
  );
}
