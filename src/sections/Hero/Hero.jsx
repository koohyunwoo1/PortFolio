import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import Tag from "../../components/ui/Tag";
import { SECTION_ID } from "../../constants/sections";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { experiences } from "../../data/history";
import IdentityCard from "./IdentityCard";
import styles from "./Hero.module.css";

// "2025.04" → 누적 개월 수
const toMonths = (yearMonth) => {
  const [year, month] = yearMonth.trim().split(".").map(Number);
  return year * 12 + month;
};

const careerMonths = experiences.reduce((total, { period }) => {
  const [start, end] = period.split("~");
  return total + toMonths(end) - toMonths(start);
}, 0);

// parts: [숫자, 단위] 쌍 — 숫자는 크게, 단위는 작게 표시
const STATS = [
  {
    label: "실무 경력",
    parts: [
      [Math.floor(careerMonths / 12), "년"],
      [careerMonths % 12, "개월"],
    ].filter(([value]) => value > 0),
  },
  { label: "팀 프로젝트", parts: [[projects.length, "건"]] },
  { label: "SW 집중 교육", parts: [[profile.trainingHours.toLocaleString(), "시간"]] },
];

const Hero = () => (
  <section id={SECTION_ID.top} className={styles.hero}>
    <Container className={styles.inner}>
      <div className={styles.copy}>
        <Tag variant="primary">{profile.tagline}</Tag>
        <h1 className={styles.headline}>
          {profile.headline.lead}
          <br />
          <em className={styles.accent}>{profile.headline.accent}</em>
        </h1>
        <p className={styles.summary}>{profile.summary}</p>

        <div className={styles.actions}>
          <Button href={`#${SECTION_ID.projects}`}>프로젝트 보기</Button>
          <Button href={`#${SECTION_ID.contact}`} variant="secondary">
            연락하기
          </Button>
        </div>

        <dl className={styles.stats}>
          {STATS.map(({ label, parts }) => (
            <div key={label} className={styles.stat}>
              <dt className={styles.statLabel}>{label}</dt>
              <dd className={styles.statValue}>
                {parts.map(([value, unit]) => (
                  <span key={unit} className={styles.statPart}>
                    <span className={styles.statNumber}>{value}</span>
                    {unit}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <IdentityCard />
    </Container>
  </section>
);

export default Hero;
