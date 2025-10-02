import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Layout.module.css";
import Logo from "../Logo/Logo";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useAuth } from "../../context/AuthContext";

export default function Layout() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { user, logout } = useAuth(); // беремо з контексту

  return (
    <div>
      <header>
        <div className={s.wrapper}>
          <Logo />
          <div className={s.rightBlock}>
            <Navigation />

            <div className={s.authButtons}>
              {!user ? (
                <>
                  <button
                    onClick={() => setShowLogin(true)}
                    className={s.authBtn}
                  >
                    <svg width="20" height="20" className={s.icon}>
                      <use href="#login" />
                    </svg>
                    <span>Login</span>
                  </button>

                  <button
                    onClick={() => setShowRegister(true)}
                    className={s.authBtn}
                  >
                    <svg width="20" height="20" className={s.icon}>
                      <use href="#register" />
                    </svg>
                    <span>Register</span>
                  </button>
                </>
              ) : (
                <button onClick={logout} className={s.authBtn}>
                  <svg width="20" height="20" className={s.icon}>
                    <use href="#login" />
                  </svg>
                  <span>Logout</span>
                </button>
              )}

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
