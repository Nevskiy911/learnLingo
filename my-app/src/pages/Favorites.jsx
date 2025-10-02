import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();
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

  const favoriteTeachers = teachers.filter((t) => favorites.includes(t.id));

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  if (favoriteTeachers.length === 0) {
    return <p>You have no favorite teachers yet.</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favoriteTeachers.slice(0, visibleCount).map((t) => (
          <TeacherCard key={t.id} teacher={t} />
        ))}
      </ul>
      {visibleCount < favoriteTeachers.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
