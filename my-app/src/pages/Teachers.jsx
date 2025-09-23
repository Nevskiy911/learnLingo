import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import TeacherCard from "../components/TeacherCard/TeacherCard";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

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

  return (
    <div>
      <h2>Teachers page</h2>
      <ul>
        {teachers.map((t) => (
          <TeacherCard key={t.id} teacher={t} />
        ))}
      </ul>
    </div>
  );
}
