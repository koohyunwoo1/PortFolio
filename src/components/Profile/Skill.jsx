import React from "react";
import "../../style/Profile/Skill.css";

const Skill = () => {
  const hardSkills = [
    {
      title: "Language",
      items: [
        {
          name: "JavaScript",
          imageSrc: "/assets/skills/JavaScript.png",
          className: "js",
          description: (
            <>
              - ES6 문법 활용 (템플릿 리터럴, 화살표 함수, 스프레드 연산자 등)
              <br />- 비동기 작업 처리 (async/await, Fetch API)
            </>
          ),
        },
        {
          name: "TypeScript",
          imageSrc: "/assets/skills/TypeScript.png",
          className: "ts",
          description: (
            <>
              - 타입 안정성 제공 (오류 감소, 유지보수 용이)
              <br />- React와 결합해 안전한 상태 관리
            </>
          ),
        },
        {
          name: "HTML5",
          imageSrc: "/assets/skills/HTML5.png",
          className: "html",
          description: (
            <>
              - 시맨틱 태그 사용으로 구조적 웹 설계
              <br />- 최신 브라우저 API 활용
            </>
          ),
        },
        {
          name: "CSS3",
          imageSrc: "/assets/skills/CSS3.png",
          className: "css",
          description: (
            <>
              - 반응형 웹 디자인 (Flexbox, Grid 활용)
              <br />- 복잡한 레이아웃 관리
            </>
          ),
        },
        {
          name: "Python",
          imageSrc: "/assets/skills/Python.png",
          className: "python",
          description: (
            <>
              - 데이터 분석 및 자동화 스크립트 작성
              <br />- Django 웹 서버 구축 경험
            </>
          ),
        },
      ],
    },
    {
      title: "Framework",
      items: [
        {
          name: "React.js",
          imageSrc: "/assets/skills/React.png",
          className: "react",
          description: (
            <>
              - 컴포넌트 기반 UI 설계
              <br />- 상태 관리 라이브러리 통합 (Redux, Zustand 등)
            </>
          ),
        },
        {
          name: "ReactNative",
          imageSrc: "/assets/skills/ReactNative.png",
          className: "react-native",
          description: (
            <>
              - 모바일 앱 개발 (iOS/Android 지원)
              <br />- 네이티브 모듈 연동, 애니메이션 처리
            </>
          ),
        },
        {
          name: "Vue.js",
          imageSrc: "/assets/skills/Vue.png",
          className: "vue",
          description: (
            <>
              - SPA 개발 (컴포넌트 기반 구조)
              <br />- Pinia 상태 관리 활용
            </>
          ),
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          name: "Figma",
          imageSrc: "/assets/skills/Figma.png",
          className: "figma",
          description: (
            <>
              - UI/UX 프로토타이핑
              <br />- Auto Layout 및 컴포넌트 관리
            </>
          ),
        },
        {
          name: "Notion",
          imageSrc: "/assets/skills/Notion.png",
          className: "notion",
          description: (
            <>
              - 팀 협업 및 프로젝트 관리
              <br />- 데이터베이스 및 템플릿 생성
            </>
          ),
        },
        {
          name: "JIRA",
          imageSrc: "/assets/skills/Jira.png",
          className: "jira",
          description: (
            <>
              - 애자일 프로젝트 관리 (스프린트/태스크 관리)
              <br />- 작업 진행 상황 시각적 관리
            </>
          ),
        },
        {
          name: "Git",
          imageSrc: "/assets/skills/Git.png",
          className: "git",
          description: (
            <>
              - 버전 관리 및 브랜치 전략 적용
              <br />- CI/CD 자동화 (GitHub Actions)
            </>
          ),
        },
      ],
    },
  ];

  const softSkills = [
    {
      title: "Communication",
      items: [
        {
          des: (
            <>
              저는
              <strong
                style={{
                  color: "orange",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "oblique",
                }}
              >
                소통
              </strong>
              을 가장 중요하게 생각하며,
              <strong
                style={{
                  color: "orange",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "oblique",
                }}
              >
                팀워크
              </strong>
              를 통해 협력하는 것을 선호합니다. 팀원들과의 열린 대화를 통해
              아이디어를 나누고, 명확하게 의견을 전달하는 것이 중요하다고
              믿습니다.
            </>
          ),
        },
      ],
    },
    {
      title: "Problem-Solving",
      items: [
        {
          des: (
            <>
              저는 문제를 분석하고 해결하는 데 있어
              <strong
                style={{
                  color: "orange",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "oblique",
                }}
              >
                논리적이고 창의적인 접근
              </strong>
              을 중요시합니다. 복잡한 문제를 단계적으로 나누어 해결하고, 다양한
              솔루션을 모색하여 최적의 결과를 도출하는 과정을 즐깁니다. 특히
              프론트엔드 개발에서 발생할 수 있는
              <strong
                style={{
                  color: "orange",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "oblique",
                }}
              >
                UI/UX 문제
              </strong>
              를 빠르게 파악하고 해결하려 노력합니다.
            </>
          ),
        },
      ],
    },
    {
      title: "Adaptability",
      items: [
        {
          des: (
            <>
              저는 빠르게 변화하는 기술 환경에
              <strong
                style={{
                  color: "orange",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "oblique",
                }}
              >
                적응하는 능력
              </strong>
              이 중요하다고 생각합니다. 새로운 기술이나 프레임워크가 등장할 때
              유연하게 학습하고, 필요할 경우 기존의 방식을 바꾸는 데 두려움이
              없습니다. 프론트엔드 개발에서 최신 트렌드와 도구들을 적극적으로
              활용하려고 합니다.
            </>
          ),
        },
      ],
    },
    {
      title: "Attention to Detail",
      items: [
        {
          des: (
            <>
              <strong
                style={{
                  color: "orange",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "oblique",
                }}
              >
                작은 디테일
              </strong>
              에도 신경 쓰는 것이 프론트엔드 개발의 핵심이라고 생각합니다.
              사용자 경험을 개선하기 위해 인터페이스의 작은 요소까지 꼼꼼히
              점검하며, 퍼포먼스 최적화와 디자인 일관성에 특별히 주의를
              기울입니다.
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <div className="Skill">
        <h2 className="SkillTitle">Hard Skills</h2>
        {hardSkills.map((skillGroup, index) => (
          <div className="SkillSection" key={index}>
            <h3 className="SkillSubTitle">{skillGroup.title}</h3>
            <div className="SkillBadges">
              {skillGroup.items.map((skill, idx) => (
                <div className="SkillBadgeContainer" key={idx}>
                  <img
                    src={skill.imageSrc}
                    alt={skill.name}
                    className="SkillBadgeImage"
                  />
                  <span className="SkillBadgeText">{skill.name}</span>
                  <div className="SkillDescription">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="SkillSection">
        <h2 className="SoftSkill">Soft Skills</h2>
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
