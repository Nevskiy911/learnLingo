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
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AuthProvider>
          <FavoritesProvider>
            <ThemeProvider>
              <App />
              <Toaster
                position="top-center"
                toastOptions={{
                  style: {
                    background: "#fff",
                    color: "#121417",
                    border: "1px solid #E0E0E0",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    fontSize: "14px",
                    fontWeight: 500,
                  },
                  success: {
                    iconTheme: {
                      primary: "#38b000",
                      secondary: "#fff",
                    },
                  },
                  error: {
                    iconTheme: {
                      primary: "#e63946",
                      secondary: "#fff",
                    },
                  },
                }}
              />
            </ThemeProvider>
          </FavoritesProvider>
        </AuthProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
