import { useTheme } from "../../context/ThemeContext";
import s from "./ThemeSwitcher.module.css";
import { themes } from "../../context/themes";

export default function ThemeSwitcher() {
  const { themeId, changeTheme } = useTheme();

  return (
    <div className={s.switcher}>
      {themes.map((t) => (
        <button
          key={t.id}
          style={{
            backgroundColor: t.primary,
            border:
              themeId === t.id ? "2px solid black" : "2px solid transparent",
          }}
          className={s.themeBtn}
          onClick={() => changeTheme(t.id)}
        />
      ))}
    </div>
  );
}
