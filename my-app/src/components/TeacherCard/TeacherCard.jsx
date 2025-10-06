import { useState } from "react";
import BookTrialModal from "../BookTrialModal/BookTrialModal";
import CardsHeader from "../CardsHeader/CardsHeader";
import s from "./TeacherCard.module.css";

export default function TeacherCard({ teacher }) {
  const [showBookTrial, setShowBookTrial] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const levels = teacher.levels || [];
  const languages = teacher.languages || [];
  const allLevels = [
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
  ];

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
            <p className={s.languages}>Languages</p>
            <h3 className={s.name}>
              {teacher.name} {teacher.surname}
            </h3>
          </div>
        </div>

        <ul className={s.skillsList}>
          <li className={s.main}>
            <span className={s.gray}>Speaks: </span>
            <span className={s.underline}>{languages.join(", ")}</span>
          </li>
          <li className={s.main}>
            <span className={s.gray}>Lessons Info: </span>
            {teacher.lesson_info}
          </li>
          <li className={s.main}>
            <span className={s.gray}>Conditions: </span>
            {teacher.conditions}
          </li>

          {expanded && (
            <>
              <li className={s.main}>{teacher.experience}</li>
              <li>
                <ul className={s.reviewsList}>
                  {teacher.reviews?.map((r, i) => {
                    const initial = r.reviewer_name?.[0]?.toUpperCase() || "?";
                    const formattedRating = Number(r.reviewer_rating).toFixed(
                      1
                    );
                    return (
                      <li key={i}>
                        <div className={s.review}>
                          <div className={s.avatar}>{initial}</div>
                          <div>
                            <p className={s.reviewer}>{r.reviewer_name}</p>
                            <p className={s.rating}>
                              <svg
                                width="16"
                                height="16"
                                className={s.iconRating}
                              >
                                <use href="#rating" />
                              </svg>
                              {formattedRating}
                            </p>
                          </div>
                        </div>
                        <p>{r.comment}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>

              <button
                className={s.bookBtn}
                onClick={() => setShowBookTrial(true)}
              >
                Book trial lesson
              </button>

              {showBookTrial && (
                <BookTrialModal
                  teacher={teacher}
                  onClose={() => setShowBookTrial(false)}
                />
              )}
            </>
          )}
        </ul>

        <button
          className={s.readMoreBtn}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        <div className={s.levelsWrapper}>
          {allLevels.map((level) => (
            <button
              key={level}
              className={`${s.levelBtn} ${
                levels.includes(level) ? s.activeLevel : ""
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
