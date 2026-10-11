import { FaArrowRight } from "react-icons/fa";
import Tag from "../../components/ui/Tag";
import styles from "./ProjectCard.module.css";

const VISIBLE_SKILLS = 3;

const ProjectCard = ({ project, onSelect }) => {
  const hiddenCount = project.skills.length - VISIBLE_SKILLS;

  return (
    <button type="button" className={styles.card} onClick={() => onSelect(project)}>
      <div className={styles.media}>
        <img src={project.thumbnail} alt="" className={styles.thumbnail} />
      </div>
      <div className={styles.body}>
        <p className={styles.period}>{project.period}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.tags}>
          {project.skills.slice(0, VISIBLE_SKILLS).map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
          {hiddenCount > 0 && <Tag>+{hiddenCount}</Tag>}
        </div>
        <span className={styles.more}>
          자세히 보기 <FaArrowRight aria-hidden />
        </span>
      </div>
    </button>
  );
};

export default ProjectCard;
