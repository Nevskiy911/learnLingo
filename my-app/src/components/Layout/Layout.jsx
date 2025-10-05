import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Layout.module.css";
import Logo from "../Logo/Logo";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";
import Container from "../Container/Container";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function Layout() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { user, logout } = useAuth();
  const { clearFavorites } = useFavorites();

  const handleLogout = async () => {
    try {
      await logout();
      clearFavorites();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div>
      <Container>
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
                      <span>Register</span>
                    </button>
                  </>
                ) : (
                  <button onClick={handleLogout} className={s.authBtn}>
                    <svg width="20" height="20" className={s.icon}>
                      <use href="#login" />
                    </svg>
                    <span>Logout</span>
                  </button>
                )}

                {showLogin && (
                  <LoginModal onClose={() => setShowLogin(false)} />
                )}
                {showRegister && (
                  <RegisterModal onClose={() => setShowRegister(false)} />
                )}
              </div>
            </div>
          </div>
          <ThemeSwitcher />
        </header>

        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
}
