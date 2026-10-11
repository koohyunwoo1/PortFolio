import styles from "./Container.module.css";

const Container = ({ className = "", children }) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);

export default Container;
