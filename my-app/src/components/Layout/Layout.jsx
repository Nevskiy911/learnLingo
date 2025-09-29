import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Layout.module.css";
import Logo from "../Logo/Logo";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

export default function Layout() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <header>
        <div className={s.wrapper}>
          <Logo />
          <div className={s.rightBlock}>
            <Navigation />

            <div className={s.authButtons}>
              <button onClick={() => setShowLogin(true)} className={s.authBtn}>
                <svg width="20" height="20" className={s.icon}>
                  <use href="/sprite.svg#login" />
                </svg>
                <span>Login</span>
              </button>

              <button
                onClick={() => setShowRegister(true)}
                className={s.authBtn}
              >
                <svg width="20" height="20" className={s.icon}>
                  <use href="/sprite.svg#register" />
                </svg>
                <span>Register</span>
              </button>

              {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
              {showRegister && (
                <RegisterModal onClose={() => setShowRegister(false)} />
              )}
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
