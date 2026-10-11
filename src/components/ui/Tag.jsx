import styles from "./Tag.module.css";

// variant: neutral | primary | positive
const Tag = ({ variant = "neutral", children }) => (
  <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>
);

export default Tag;
