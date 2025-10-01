import { useEffect } from "react";
import s from "./Modal.module.css";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className={s.overlay} onClick={onClose}>
      <div
        className={s.content}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className={s.closeBtn}
          aria-label="Close modal"
          onClick={onClose}
        >
          <svg width="20" height="20">
            <use href="#close" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
