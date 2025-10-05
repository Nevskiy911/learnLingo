import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import Modal from "../Modal/Modal";
import s from "../AuthModal/AuthModal.module.css";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

export default function LoginModal({ onClose }) {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      onClose();
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrapper}>
        <div>
          <h2 className={s.title}>Log in</h2>
          <p className={s.description}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <label className={s.label}>
            <input
              type="email"
              {...register("email")}
              className={s.input}
              placeholder="Email"
            />
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
          </label>

          <label className={s.label}>
            <input
              type="password"
              {...register("password")}
              className={s.input}
              placeholder="Password"
            />
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
          </label>

          <button type="submit" className={s.submitBtn}>
            Log in
          </button>
        </form>
      </div>
    </Modal>
  );
}
