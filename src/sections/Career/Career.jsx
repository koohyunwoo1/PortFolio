import Section from "../../components/layout/Section";
import Reveal from "../../components/ui/Reveal";
import Tag from "../../components/ui/Tag";
import { SECTION_ID } from "../../constants/sections";
import { certificates, education, experiences } from "../../data/history";
import styles from "./Career.module.css";

// 비어 있는 그룹은 자동으로 숨긴다.
const GROUPS = [
  { key: "experience", label: "Experience", items: experiences },
  { key: "education", label: "Education", items: education },
  { key: "certificate", label: "Certification", items: certificates },
].filter((group) => group.items.length > 0);

const DetailList = ({ details }) =>
  details.length > 0 && (
    <ul className={styles.details}>
      {details.map((detail) => (
        <li key={detail}>{detail}</li>
      ))}
    </ul>
  );

const Career = () => (
  <Section id={SECTION_ID.career} eyebrow="Career" title="걸어온 길">
    <div className={styles.groups}>
      {GROUPS.map((group) => (
        <Reveal key={group.key} className={styles.group}>
          <h3 className={styles.groupTitle}>{group.label}</h3>
          <ol className={styles.timeline}>
            {group.items.map(
              ({ title, subtitle, period, note, stack = [], details = [], projects = [] }) => (
                <li key={title} className={styles.item}>
                  <div className={styles.periodColumn}>
                    <span className={styles.period}>{period}</span>
                    {note && <Tag variant="primary">{note}</Tag>}
                  </div>
                  <div>
                    <p className={styles.title}>{title}</p>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    {stack.length > 0 && (
                      <div className={styles.stack}>
                        {stack.map((name) => (
                          <Tag key={name}>{name}</Tag>
                        ))}
                      </div>
                    )}
                    <DetailList details={details} />

                    {projects.length > 0 && (
                      <ol className={styles.projects}>
                        {projects.map((project) => (
                          <li key={project.title} className={styles.project}>
                            <span className={styles.projectPeriod}>{project.period}</span>
                            <p className={styles.projectTitle}>{project.title}</p>
                            <DetailList details={project.details} />
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </li>
              )
            )}
          </ol>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Career;
