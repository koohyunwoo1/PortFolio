import "../../style/Profile/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBirthdayCake,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import Skill from "./Skill";
import Career from "./Career";
import Certificate from "./Certificate";

const Profile = () => {
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

          <div className="Badges">
            <span className="Badge">
              <FontAwesomeIcon icon={faCodeBranch} /> Frontend Developer
            </span>
            <span className="Badge">React.js</span>
          </div>
          <div className="ProfileIntro">
            자바스크립트로 가치를 더하는 프론트엔드 개발자.
            <br />
            보이는 완벽함을 추구합니다.
          </div>
        </div>
      </div>

      <div
        style={{
          height: "0px",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          margin: "20px 0",
          width: "100%",
        }}
      />

      <div className="ProfileSkill" id="Skill">
        <Skill />
      </div>
      <div
        style={{
          height: "0px",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          margin: "20px 0",
          width: "100%",
        }}
      />

      <div className="ProfileCareer">
        <Career />
      </div>
      <div
        style={{
          height: "0px",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          margin: "20px 0",
          width: "100%",
        }}
      />

      <div className="ProfileCertificate">
        <Certificate />
      </div>
    </div>
  );
};

export default Profile;
