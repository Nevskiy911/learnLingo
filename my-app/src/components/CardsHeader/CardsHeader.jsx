import FavoriteButton from "../FavoriteButton/FavoriteButton";
import s from "./CardsHeader.module.css";

export default function CardsHeader({ teacher }) {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li>
          <svg width="16" height="16" className={s.icon}>
            <use href="#book" />
          </svg>
          Lessons online
        </li>
        <li>Lessons done: {teacher.lessons_done}</li>
        <li>
          <svg width="16" height="16" className={s.iconRating}>
            <use href="#rating" />
          </svg>
          Rating: {teacher.rating}
        </li>
        <li>
          Price / 1 hour:{" "}
          <span className={s.price}>{teacher.price_per_hour}$</span>
        </li>
      </ul>
      <FavoriteButton
        cardId={teacher.id}
        onRequireAuth={() => alert("You must log in!")}
      />
    </div>
  );
}
