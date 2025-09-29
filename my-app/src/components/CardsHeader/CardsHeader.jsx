import FavoriteButton from "../FavoriteButton/FavoriteButton";
import s from "./CardsHeader.module.css";

export default function CardsHeader({ teacher }) {
  return (
    <div>
      <ul className={s.wrapper}>
        <li>Lessons online</li>
        <li>Lessons done: {teacher.lessons_done}</li>
        <li>Rating: {teacher.rating}</li>
        <li>Price / 1 hour: {teacher.price_per_hour}</li>
      </ul>
      <FavoriteButton
        cardId={teacher.id}
        onRequireAuth={() => alert("Доступно лише авторизованим")}
      />
    </div>
  );
}
