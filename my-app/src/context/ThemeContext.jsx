import { createContext, useContext, useState, useEffect } from "react";
import { themes } from "./themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem("theme") || "yellow";
  });

  const theme = themes.find((t) => t.id === themeId) || themes[0];

  useEffect(() => {
    localStorage.setItem("theme", themeId);

    document.documentElement.style.setProperty(
      "--primary-color",
      theme.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme.secondary
    );
  }, [themeId, theme]);

  const changeTheme = (id) => setThemeId(id);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themeId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
