import Section from "../../components/layout/Section";
import Reveal from "../../components/ui/Reveal";
import Tag from "../../components/ui/Tag";
import { SECTION_ID } from "../../constants/sections";
import { SiDocker, SiLaravel, SiLinux, SiOracle, SiPhp, SiPostgresql } from "react-icons/si";
import { techStack } from "../../data/skills";
import styles from "./Stack.module.css";

const ICONS = {
  php: SiPhp,
  laravel: SiLaravel,
  postgresql: SiPostgresql,
  oracle: SiOracle,
  docker: SiDocker,
  linux: SiLinux,
};

const SkillLogo = ({ skill }) => {
  if (skill.image) return <img src={skill.image} alt="" className={styles.logo} />;

  const Icon = ICONS[skill.icon];
  return (
    <span className={styles.logo} style={{ color: skill.color }}>
      <Icon aria-hidden />
    </span>
  );
};

// 증권 앱의 보유 종목 리스트처럼 기술 스택을 한 줄씩 보여준다.
const Stack = () => (
  <Section
    id={SECTION_ID.stack}
    eyebrow="Tech Stack"
    title="서비스를 만드는 도구"
    description="프론트엔드부터 백엔드, 데이터베이스까지 다루는 기술들입니다."
    tone="subtle"
  >
    <Reveal className={styles.board}>
      <div className={styles.head} aria-hidden>
        <span>Stack</span>
        <span>분류</span>
        <span>활용 경험</span>
      </div>
      <ul className={styles.list}>
        {techStack.map((skill) => (
          <li key={skill.name} className={styles.row}>
            <div className={styles.asset}>
              <SkillLogo skill={skill} />
              <span className={styles.name}>{skill.name}</span>
              {skill.isMain && <Tag variant="positive">Main</Tag>}
            </div>
            <span className={styles.category}>{skill.category}</span>
            <ul className={styles.description}>
              {skill.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Reveal>
  </Section>
);

export default Stack;
