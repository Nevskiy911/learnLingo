import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import TeacherCard from "../components/TeacherCard/TeacherCard";

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
    <div>
      <h2>Teachers page</h2>
      <ul>
        {teachers.slice(0, visibleCount).map((t) => (
          <TeacherCard key={t.id} teacher={t} />
        ))}
      </ul>
      {visibleCount < teachers.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
