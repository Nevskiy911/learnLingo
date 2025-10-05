import "modern-normalize/modern-normalize.css";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AuthProvider>
          <FavoritesProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </FavoritesProvider>
        </AuthProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
