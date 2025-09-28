import "modern-normalize/modern-normalize.css";
import "./styles/reset.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
