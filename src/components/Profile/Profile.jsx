import React, { useEffect, useRef, useState } from "react";
import "../../style/Profile/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBirthdayCake,
  faEnvelope,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiNotion } from "react-icons/si";
import Skill from "./Skill";
import Career from "./Career";

const Profile = () => {
  const hrRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (hrRef.current) {
      observer.observe(hrRef.current);
    }

    return () => {
      if (hrRef.current) {
        observer.unobserve(hrRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="Profile">
        <div className="ProfileImage" />
        <div className="ProfileDetails">
          <div className="ProfileName">
            <FontAwesomeIcon icon={faUser} /> 구현우
          </div>
          <div className="ProfileBirth">
            <FontAwesomeIcon icon={faBirthdayCake} /> 1999.07.07
          </div>
          <div className="ProfileEmailContainer">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:kjklovekhw@gmail.com" className="ProfileEmail">
              kjklovekhw@gmail.com
            </a>
          </div>

          <div className="Badges">
            <span className="Badge">
              <FontAwesomeIcon icon={faCodeBranch} /> Frontend Developer
            </span>
            <span className="Badge">React.js</span>
          </div>
          <div className="ProfileIntro">
            최고의 UI/UX는 보이지 않지만 느껴지는 것.
            <br />
            보이지 않는 완벽함을 위해 노력하는 프론트엔드 개발자입니다.
          </div>
          <div className="ProfileLink">
            <div className="ProfileGithub">
              <a
                href="https://github.com/koohyunwoo1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
            <div className="ProfileNotion">
              <a
                href="https://www.notion.so/Frontend-developer-1257c5ebb36c804f9f48f9ef42e64263"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiNotion /> Notion
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr ref={hrRef} className={`ProfileHr ${isVisible ? "animate" : ""}`} />

      <div className="ProfileSkill" id="Skill">
        <Skill />
      </div>
      <div className="ProfileCareer">
        <Career />
      </div>
    </div>
  );
};

export default Profile;
