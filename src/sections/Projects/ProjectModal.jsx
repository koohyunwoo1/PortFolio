import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import Tag from "../../components/ui/Tag";
import ImageLightbox from "./ImageLightbox";
import styles from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  const facts = [
    { label: "개발 인원", value: project.team },
    { label: "역할", value: project.roles.join(" · ") },
    { label: "Tools", value: project.tools.join(", ") },
  ];

  const handleClose = () => {
    setSelectedImage(null);
    onClose();
  };

  return (
    <>
      <Modal isOpen onClose={handleClose} ariaLabel={`${project.title} 상세 정보`}>
        <header className={styles.header}>
          <p className={styles.period}>{project.period}</p>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.summary}>{project.summary}</p>
          <Button href={project.link} external variant="dark" size="sm" className={styles.github}>
            <FaGithub aria-hidden /> GitHub
          </Button>
        </header>

        <dl className={styles.facts}>
          {facts.map(({ label, value }) => (
            <div key={label} className={styles.fact}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <section className={styles.block}>
          <h3 className={styles.blockTitle}>기술 스택</h3>
          <div className={styles.tags}>
            {project.skills.map((skill) => (
              <Tag key={skill} variant="primary">
                {skill}
              </Tag>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h3 className={styles.blockTitle}>주요 기능</h3>
          <div className={styles.features}>
            {project.features.map((feature) => (
              <div key={feature.title} className={styles.feature}>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <ul className={styles.featureList}>
                  {feature.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h3 className={styles.blockTitle}>
            화면
            <span className={styles.hint}>클릭하면 크게 볼 수 있어요</span>
          </h3>
          <div className={styles.gallery}>
            {project.images.map((src, index) => (
              <button
                key={src}
                type="button"
                className={styles.thumb}
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`${project.title} 화면 ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      </Modal>

      <ImageLightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
};

export default ProjectModal;
