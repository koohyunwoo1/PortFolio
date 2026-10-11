import { profile } from "../../data/profile";
import Container from "./Container";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.inner}>
      <span>
        © {new Date().getFullYear()} {profile.englishName}
      </span>
      <span>Built with React · Vite</span>
    </Container>
  </footer>
);

export default Footer;
