import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import s from "./Navigation.module.css";

export default function Navigation() {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/teachers"
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Teachers
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
