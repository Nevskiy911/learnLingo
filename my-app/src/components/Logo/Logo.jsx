import { Link } from "react-router-dom";
import s from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={s.logoWrapper}>
      <div className={s.logo}>
        <svg width="28" height="28">
          <use href={`/sprite.svg#ukraine`} />
        </svg>
      </div>
      <div>
        <p className={s.logoDescr}>LearnLingo</p>
      </div>
    </Link>
  );
}
