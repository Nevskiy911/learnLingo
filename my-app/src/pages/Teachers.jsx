import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import Filters from "../components/Filters/Filters";
import s from "./styles/Teachers.module.css";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [filters, setFilters] = useState({
    language: "",
    level: "",
    price: "",
  });

  useEffect(() => {
    const teachersRef = ref(db, "teachers");

    onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsed = Object.entries(data).map(([id, teacher]) => ({
          id,
          ...teacher,
          languages: Array.isArray(teacher.languages) ? teacher.languages : [],
          levels: Array.isArray(teacher.levels) ? teacher.levels : [],
        }));
        setTeachers(parsed);
      }
    });
  }, []);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  const filteredTeachers = teachers.filter((t) => {
    const matchLanguage =
      !filters.language || t.languages.includes(filters.language);
    const matchLevel = !filters.level || t.levels.includes(filters.level);

    const price = Number(t.price_per_hour);
    let matchPrice = true;
    if (filters.price) {
      const selected = Number(filters.price);
      if (selected === 10) matchPrice = price < 20;
      else if (selected === 20) matchPrice = price >= 20 && price < 30;
      else if (selected === 30) matchPrice = price >= 30 && price < 40;
      else if (selected === 40) matchPrice = price >= 40;
    }

    return matchLanguage && matchLevel && matchPrice;
  });

  return (
    <div>
      <Filters
        filters={filters}
        onFilter={setFilters}
        onReset={() => setFilters({ language: "", level: "", price: "" })}
      />
      <div className={s.wrapper}>
        <ul className={s.list}>
          {filteredTeachers.slice(0, visibleCount).map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </ul>

        {filteredTeachers.length > 0 &&
          visibleCount < filteredTeachers.length && (
            <button onClick={handleLoadMore} className={s.btn}>
              Load more
            </button>
          )}
      </div>
    </div>
  );
}
