import React from "react";

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
            - 재사용성 높은 컴포넌트 설계
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
            - 애자일 프로젝트 관리
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

export default hardSkills;
