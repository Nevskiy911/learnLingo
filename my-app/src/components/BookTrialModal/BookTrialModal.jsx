import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../Modal/Modal";
import s from "./BookTrialModal.module.css";

const schema = yup.object({
  reason: yup.string().required("Please select your reason"),
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9\s-]+$/, "Enter a valid phone number")
    .required("Phone number is required"),
});

export default function BookTrialModal({ teacher, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Booking data:", data);
    reset();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h2 className={s.title}>Book trial lesson</h2>
          <p className={s.description}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={s.picture}>
            <img
              className={s.img}
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
            />
            <div>
              <p className={s.pictureDecr}>Your teacher</p>
              <h3 className={s.pictureName}>
                {teacher.name} {teacher.surname}
              </h3>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <fieldset className={s.radioGroup}>
            <legend className={s.legend}>
              What is your main reason for learning English?
            </legend>

            {[
              "Career and business",
              "Lesson for kids",
              "Living abroad",
              "Exams and coursework",
              "Culture, travel or hobby",
            ].map((reason) => (
              <label key={reason} className={s.radioLabel}>
                <input
                  type="radio"
                  value={reason}
                  {...register("reason")}
                  className={s.radioInput}
                />
                {reason}
              </label>
            ))}
            {errors.reason && (
              <p className={s.error}>{errors.reason.message}</p>
            )}
          </fieldset>

          <label className={s.label}>
            <input
              type="text"
              {...register("fullName")}
              className={s.input}
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className={s.error}>{errors.fullName.message}</p>
            )}
          </label>

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
              type="tel"
              {...register("phone")}
              className={s.input}
              placeholder="Phone number"
            />
            {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
          </label>

          <button type="submit" className={s.submitBtn}>
            Send
          </button>
        </form>
      </div>
    </Modal>
  );
}
