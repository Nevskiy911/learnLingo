import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";
import LikeIcon from "../LikeIcon/LikeIcon";
import s from "./FavoriteButton.module.css";

export default function FavoriteButton({ cardId, onRequireAuth }) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleClick = () => {
    if (!user) {
      onRequireAuth?.();
      return;
    }
    toggleFavorite(cardId);
  };

  return (
    <button onClick={handleClick} className={s.btn}>
      <LikeIcon active={isFavorite(cardId)} />
    </button>
  );
}
