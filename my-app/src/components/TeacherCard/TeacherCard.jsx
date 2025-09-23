import CardsHeader from "../CardsHeader/CardsHeader";
import s from "./TeacherCard.module.css";

export default function TeacherCard({ teacher }) {
  return (
    <div className={s.teacherCard}>
      <span className={s.border}>
        <img
          className={s.img}
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
        />
      </span>
      <div className={s.description}>
        <div className={s.headerWrapper}>
          <CardsHeader teacher={teacher} />
          <div className={s.nameWrapper}>
            <p>Languages</p>
            <h3>
              {teacher.name} {teacher.surname}
            </h3>
          </div>
        </div>
        <p>
          Speaks:{" "}
          <span className={s.underline}>{teacher.languages.join(", ")}</span>
        </p>
        <p>
          <strong>Price:</strong> ${teacher.price_per_hour}/hour
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};
