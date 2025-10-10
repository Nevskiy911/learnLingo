import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SvgSprite from "./components/SvgSprite/SvgSprite";
import { useAuth } from "./context/AuthContext";
import { useModal } from "./context/ModalContext";

function App() {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const { showLogin, setShowLogin, showRegister, setShowRegister } = useModal();
  const Home = lazy(() => import("./pages/Home"));
  const Teachers = lazy(() => import("./pages/Teachers"));
  const Favorites = lazy(() => import("./pages/Favorites"));

  return (
    <>
      <SvgSprite />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  isAuthenticated={isAuthenticated}
                  onRequireAuth={() => setShowLogin(true)}
                >
                  <Favorites />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
}
export default App;
