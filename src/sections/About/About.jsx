import Section from "../../components/layout/Section";
import Reveal from "../../components/ui/Reveal";
import Tag from "../../components/ui/Tag";
import HighlightText from "../../components/ui/HighlightText";
import { SECTION_ID } from "../../constants/sections";
import { contacts, profile } from "../../data/profile";
import { softSkills } from "../../data/skills";
import styles from "./About.module.css";

const FACTS = [
  { label: "생년월일", value: profile.birth },
  ...contacts.map(({ label, value }) => ({ label, value })),
];

const About = () => (
  <Section
    id={SECTION_ID.about}
    eyebrow="About"
    title={`안녕하세요, ${profile.name}입니다`}
    description={profile.intro.join(" ")}
  >
    <div className={styles.grid}>
      <Reveal className={styles.profile}>
        <img src={profile.photo} alt={`${profile.name} 프로필 사진`} className={styles.photo} />
        <p className={styles.name}>
          {profile.name}
          <span className={styles.englishName}>{profile.englishName}</span>
        </p>
        <p className={styles.role}>{profile.role}</p>
        <dl className={styles.facts}>
          {FACTS.map(({ label, value }) => (
            <div key={label} className={styles.fact}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.keywords}>
          {profile.keywords.map((keyword) => (
            <Tag key={keyword} variant="primary">
              {keyword}
            </Tag>
          ))}
        </div>
      </Reveal>

      <div className={styles.values}>
        {softSkills.map((skill, index) => (
          <Reveal key={skill.title} delay={index * 80} className={styles.valueCard}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            <h3 className={styles.valueTitle}>{skill.title}</h3>
            <p className={styles.valueText}>
              <HighlightText text={skill.description} />
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
