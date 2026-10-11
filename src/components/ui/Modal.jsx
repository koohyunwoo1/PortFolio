import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

// 열린 모달 스택: Esc 는 가장 위의 모달만 닫는다.
const openModals = [];

// variant: default | lightbox
const Modal = ({ isOpen, onClose, variant = "default", ariaLabel, children }) => {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const id = Symbol("modal");
    openModals.push(id);
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && openModals.at(-1) === id) {
        onCloseRef.current();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      openModals.splice(openModals.indexOf(id), 1);
      if (openModals.length === 0) document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={`${styles.overlay} ${styles[`${variant}Overlay`] ?? ""}`} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={`${styles.content} ${styles[variant]}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="닫기">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
