import { Route, Routes } from "react-router-dom";
import Teachers from "./pages/Teachers";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SvgSprite from "./components/SvgSprite/SvgSprite";
import { useAuth } from "./context/AuthContext";

import { useModal } from "./context/ModalContext";

function App() {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const { showLogin, setShowLogin, showRegister, setShowRegister } = useModal();

  return (
    <>
      <SvgSprite />
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

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
}
export default App;
