import LikeIcon from "../LikeIcon/LikeIcon";
import { useFavorites } from "../../context/FavoritesContext";
import { useAuth } from "../../context/AuthContext";
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
    <button className={s.btn} onClick={handleClick}>
      <LikeIcon active={isFavorite(cardId)} />
    </button>
  );
}
