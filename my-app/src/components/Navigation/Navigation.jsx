import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
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

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
}
