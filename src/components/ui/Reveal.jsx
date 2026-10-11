import { useInView } from "../../hooks/useInView";
import styles from "./Reveal.module.css";

// 화면에 들어오면 아래에서 위로 페이드인
const Reveal = ({ delay = 0, className = "", children }) => {
  const [ref, inView] = useInView({ once: true });

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.visible : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
