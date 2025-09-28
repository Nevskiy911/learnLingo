import { useAuth } from "../context/AuthContext";
import s from "./styles/Home.module.css";

export default function Home() {
  const { user } = useAuth;
  return (
    <div>
      <div className={s.wrapper}>
        <div>
          <h1>Unlock your potential with the best language tutors</h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button>Get started</button>
        </div>
        <img
          src={user?.photoURL || "/images/placeholder.png"}
          alt={user?.displayName || "Placeholder"}
        />
      </div>
      <ul>
        <li>
          <p>32,000 +</p>
          <p>Experienced tutors</p>
        </li>
        <li>
          <p>300,000 +</p>
          <p>5-star tutor reviews</p>
        </li>
        <li>
          <p>120 +</p>
          <p>Subjects taught</p>
        </li>
        <li>
          <p>200 +</p>
          <p>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
