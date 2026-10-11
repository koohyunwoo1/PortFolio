import { useState } from "react";
import Section from "../../components/layout/Section";
import Reveal from "../../components/ui/Reveal";
import { SECTION_ID } from "../../constants/sections";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import styles from "./Projects.module.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section
      id={SECTION_ID.projects}
      eyebrow="Projects"
      title={`${projects.length}개의 팀 프로젝트`}
      description="카드를 선택하면 기능과 화면을 자세히 볼 수 있습니다."
      tone="subtle"
    >
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 100}>
            <ProjectCard project={project} onSelect={setSelectedProject} />
          </Reveal>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
};

export default Projects;
