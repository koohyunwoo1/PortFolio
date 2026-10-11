import { NAV_ITEMS, SECTION_ID } from "../../constants/sections";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import Container from "./Container";
import styles from "./Header.module.css";

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

const Header = () => {
  const isScrolled = useScrolled();
  const activeId = useActiveSection(NAV_IDS);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Container className={styles.inner}>
        <a href={`#${SECTION_ID.top}`} className={styles.logo}>
          <span className={styles.logoMark}>HW</span>
          <span className={styles.logoText}>{profile.englishName}</span>
        </a>
        <nav aria-label="섹션 이동">
          <ul className={styles.nav}>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${styles.link} ${activeId === id ? styles.active : ""}`}
                  aria-current={activeId === id ? "true" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
