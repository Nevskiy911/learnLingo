import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Layout.module.css";
import Logo from "../Logo/Logo";

export default function Layout() {
  return (
    <div>
      <header>
        <div className={s.wrapper}>
          <Logo />
          <div className={s.rightBlock}>
            <Navigation />
            <div className={s.authButtons}>
              <button className={s.authBtn}>
                <svg width="20" height="20" className={s.icon}>
                  <use href="/sprite.svg#login" />
                </svg>
                Login
              </button>
              <button className={s.authBtn}>Register</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
