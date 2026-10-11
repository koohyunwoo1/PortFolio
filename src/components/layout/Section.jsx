import Container from "./Container";
import Reveal from "../ui/Reveal";
import styles from "./Section.module.css";

// tone: "default"(흰 배경) | "subtle"(회색 배경)
const Section = ({ id, eyebrow, title, description, tone = "default", children }) => (
  <section id={id} className={`${styles.section} ${styles[tone]}`}>
    <Container>
      <Reveal className={styles.header}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </Reveal>
      {children}
    </Container>
  </section>
);

export default Section;
