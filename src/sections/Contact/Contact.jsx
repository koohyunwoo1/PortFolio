import Container from "../../components/layout/Container";
import Reveal from "../../components/ui/Reveal";
import { SECTION_ID } from "../../constants/sections";
import { contacts } from "../../data/profile";
import ContactChannel from "./ContactChannel";
import styles from "./Contact.module.css";

const Contact = () => (
  <section id={SECTION_ID.contact} className={styles.contact}>
    <Container>
      <Reveal className={styles.panel}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.title}>연락처</h2>
          <p className={styles.description}>
            포트폴리오를 봐주셔서 감사합니다.
            <br />
            궁금한 점이 있으시면 편하게 연락 주세요.
          </p>
        </div>
        <ul className={styles.channels}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <ContactChannel contact={contact} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  </section>
);

export default Contact;
