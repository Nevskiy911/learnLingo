// import { Link, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Teachers from "./pages/Teatchers";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <div>
        <nav>
          <Link to="/">Home</Link>| <Link to="/teachers">Teachers</Link>|{" "}
          <Link to="/favorites">Favorites</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div> */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
          Кнопка
        </button>
      </div>
    </>
  );
}

export default App;
