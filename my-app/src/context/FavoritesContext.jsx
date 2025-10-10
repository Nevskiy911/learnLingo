import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  const storageKey = user ? `favorites_${user.email}` : "favorites_guest";

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      const parsed = saved ? JSON.parse(saved) : [];
      setFavorites(Array.isArray(parsed) ? parsed : []);
    } catch (error) {
      console.error("Error reading favorites:", error);
      setFavorites([]);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites, storageKey]);

  const isFavorite = (id) => Array.isArray(favorites) && favorites.includes(id);

  const toggleFavorite = (id) => {
    if (!user) {
      toast.error("You need to sign in to add favorites 👋");
      return;
    }

    setFavorites((prev) => {
      const isAlreadyFav = prev.includes(id);
      const updated = isAlreadyFav
        ? prev.filter((f) => f !== id)
        : [...prev, id];

      if (isAlreadyFav) {
        toast("Removed from favorites 💔", {
          icon: "❌",
        });
      } else {
        toast("Added to favorites 💛", {
          icon: "✅",
        });
      }

      return updated;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
