import { Route, Routes } from "react-router-dom";
import Teachers from "./pages/Teachers";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const isAuthenticated = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Favorites />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
