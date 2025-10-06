import { useState, useRef, useEffect } from "react";
import s from "./CustomSelect.module.css";

export default function CustomSelect({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={s.dropdown} ref={ref}>
      <span className={s.label}>{label}</span>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={s.button}
      >
        <span className={s.text}>{value || options[0]}</span>
        <span
          className={s.arrow}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#121417"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <ul className={s.list}>
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`${s.option} ${value === opt ? s.activeOption : ""}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
