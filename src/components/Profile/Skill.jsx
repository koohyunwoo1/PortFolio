import React, { useState } from "react";
import "../../style/Profile/Skill.css";
import hardSkills from "./HardSkill";
import softSkills from "./SoftSkill";

const Skill = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div>
      <div className="Skill">
        <h2 className="SkillTitle">Hard Skills</h2>
        {hardSkills.map((skillGroup, index) => (
          <div className="SkillSection" key={index}>
            <h3 className="SkillSubTitle">{skillGroup.title}</h3>
            <div className="SkillBadges">
              {skillGroup.items.map((skill, idx) => (
                <div
                  className="SkillBadgeContainer"
                  key={idx}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {hoveredSkill === skill.name ? (
                    <div className="SkillDescription">{skill.description}</div>
                  ) : (
                    <div className="SkillBadgeContainer">
                      <img src={skill.imageSrc} className="SkillBadgeImage" />
                      <span className="SkillBadgeText">{skill.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="SkillSection">
        <h2 className="SkillTitle">Soft Skills</h2>
        <ul className="SoftSkillTitle">
          {softSkills.map((skillGroup, index) => (
            <li key={index} className="SoftSkillText">
              {skillGroup.title}
              <ul className="SoftSkillSubText">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx}>{skill.des}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skill;
