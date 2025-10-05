import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import s from "./styles/Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleGetStarted = () => {
    navigate("/teachers");
  };

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.right}>
          <h1 className={s.mainText}>
            Unlock your potential with the best{" "}
            <span className={s.italic}>language</span> tutors
          </h1>
          <p className={s.description}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={s.btn} onClick={handleGetStarted}>
            Get started
          </button>
        </div>
        <img
          src={theme.mainImage}
          alt={`${theme.name} theme`}
          className={s.mainImage}
        />
      </div>

      <ul className={s.footer}>
        <li className={s.footerItem}>
          <p className={s.metrics}>32,000 +</p>
          <p>Experienced tutors</p>
        </li>
        <li className={s.footerItem}>
          <p className={s.metrics}>300,000 +</p>
          <p>5-star tutor reviews</p>
        </li>
        <li className={s.footerItem}>
          <p className={s.metrics}>120 +</p>
          <p>Subjects taught</p>
        </li>
        <li className={s.footerItem}>
          <p className={s.metrics}>200 +</p>
          <p>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
