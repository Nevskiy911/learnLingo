import { createContext, useContext, useState, useEffect } from "react";
import { themes } from "./themes";
import { useAuth } from "./AuthContext";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { user } = useAuth();
  const [themeId, setThemeId] = useState("yellow");

  const storageKey = user ? `theme_${user.email}` : "theme_default";

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setThemeId(saved || "yellow");
  }, [storageKey]);

  const theme = themes.find((t) => t.id === themeId) || themes[0];

  useEffect(() => {
    localStorage.setItem(storageKey, themeId);
    document.documentElement.style.setProperty(
      "--primary-color",
      theme.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme.secondary
    );
  }, [themeId, theme, storageKey]);

  const changeTheme = (id) => setThemeId(id);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themeId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
