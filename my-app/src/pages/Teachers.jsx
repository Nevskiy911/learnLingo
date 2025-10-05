import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import s from "./styles/Teachers.module.css";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const teachersRef = ref(db, "teachers");

    onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsed = Object.entries(data).map(([id, teacher]) => ({
          id,
          ...teacher,
        }));
        setTeachers(parsed);
      }
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {teachers.slice(0, visibleCount).map((t) => (
          <TeacherCard key={t.id} teacher={t} />
        ))}
      </ul>
      {visibleCount < teachers.length && (
        <button onClick={handleLoadMore} className={s.btn}>
          Load more
        </button>
      )}
    </div>
  );
}
