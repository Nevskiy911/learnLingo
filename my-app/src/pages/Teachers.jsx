// src/pages/Teachers.jsx
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const teachersRef = ref(db, "teachers");

    // слухаємо зміни у БД
    onValue(teachersRef, (snapshot) => {
      console.log("SNAPSHOT:", snapshot.val()); // 👈 перевіримо
      const data = snapshot.val();
      if (data) {
        // перетворюємо об'єкт у масив
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
          <li key={t.id}>
            <strong>
              {t.name} {t.surname}
            </strong>{" "}
            – {t.languages.join(", ")} – ${t.price_per_hour}/hour
          </li>
        ))}
      </ul>
    </div>
  );
}
