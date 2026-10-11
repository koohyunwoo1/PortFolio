const skillImage = (name) => `/assets/skills/${name}.png`;

// 위에서부터 주력 순서. isMain 은 "Main" 태그로 표시된다.
// 로고는 image(public/assets/skills) 또는 icon(sections/Stack 의 아이콘 맵 키) + color 중 하나를 쓴다.
export const techStack = [
  {
    name: "JavaScript",
    image: skillImage("JavaScript"),
    category: "Language",
    isMain: true,
    description: [
      "Geolocation API로 실시간 이동 경로 추적, 위치 튐 보정으로 오차 5m 이내 개선 (RunUs)",
      "WebSocket으로 팀원 위치를 지도에 실시간 렌더링 (RunUs)",
    ],
  },
  {
    name: "React",
    image: skillImage("React"),
    category: "Frontend",
    isMain: true,
    description: [
      "Context API 상태 관리, recharts 시각화, 무한 스크롤 구현 (RunUs)",
      "이 포트폴리오 사이트 설계·구현 (CSS Modules, 디자인 토큰)",
    ],
  },
  {
    name: "PHP",
    icon: "php",
    color: "#777BB4",
    category: "Language",
    isMain: true,
    description: [
      "업무 시스템 유지보수 및 데이터 처리",
      "PHP 레거시 시스템 분석 및 차세대 시스템 마이그레이션",
    ],
  },
  {
    name: "Laravel",
    icon: "laravel",
    color: "#FF2D20",
    category: "Backend",
    isMain: true,
    description: [
      "컨트롤러 / 서비스 / 레포지토리 / 모델 계층 분리 설계",
      "비동기 큐 기반 외부 API 연동, Chunk 단위 대량 데이터 처리",
    ],
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    color: "#4169E1",
    category: "Database",
    description: [
      "데이터 조회 및 업무 로직 개선",
      "레거시 → 신규 시스템 데이터 마이그레이션 및 정합성 검증",
    ],
  },
  {
    name: "Oracle",
    icon: "oracle",
    color: "#F80000",
    category: "Database",
    description: ["운영 환경 데이터 조회 및 검증"],
  },
  {
    name: "TypeScript",
    image: skillImage("TypeScript"),
    category: "Language",
    description: [
      "TypeScript + React 음악 플랫폼 개발 (Music)",
      "TypeScript + React Native + Redux 모바일 앱 개발 (PillSoo)",
    ],
  },
  {
    name: "React Native",
    image: skillImage("ReactNative"),
    category: "Mobile",
    description: [
      "Google Vision API OCR 스캔 기반 영양제 검색 앱 개발 (PillSoo)",
      "프론트엔드 팀장으로 화면 설계와 일정 관리 담당",
    ],
  },
  // {
  //   name: "HTML5",
  //   image: skillImage("HTML5"),
  //   category: "Frontend",
  //   description: ["시맨틱 태그 사용으로 구조적 웹 설계", "최신 브라우저 API 활용"],
  // },
  // {
  //   name: "CSS3",
  //   image: skillImage("CSS3"),
  //   category: "Frontend",
  //   description: ["반응형 웹 디자인 (Flexbox, Grid 활용)", "복잡한 레이아웃 관리"],
  // },
  {
    name: "Python",
    image: skillImage("Python"),
    category: "Language",
    description: ["Django 웹 서버 구현 (SSAFY)", "Pandas·NumPy 기반 데이터 전처리 및 통계 분석 (학부)"],
  },
  {
    name: "Docker",
    icon: "docker",
    color: "#2496ED",
    category: "DevOps",
    description: ["컨테이너 기반 개발 환경 활용"],
  },
  {
    name: "Linux",
    icon: "linux",
    color: "#1F2937",
    category: "DevOps",
    description: ["서버 환경에서 배치 프로그램 운영 및 장애 대응"],
  },
  {
    name: "Git",
    image: skillImage("Git"),
    category: "Collaboration",
    description: ["기능 브랜치 기반 팀 협업 및 코드 리뷰", "CI/CD 자동화 (GitHub Actions)"],
  },
  {
    name: "JIRA",
    image: skillImage("Jira"),
    category: "Collaboration",
    description: ["스프린트 단위 이슈 관리 (SSAFY 팀 프로젝트)"],
  },
  {
    name: "Figma",
    image: skillImage("Figma"),
    category: "Collaboration",
    description: ["와이어프레임·프로토타입 작성 후 개발 진행"],
  },
  {
    name: "Notion",
    image: skillImage("Notion"),
    category: "Collaboration",
    description: ["회의록·기획 문서 관리"],
  },
];

// 실제 경험 기반 일하는 방식. **텍스트** 는 강조 표시된다 (components/ui/HighlightText).
export const strengths = [
  {
    title: "레거시를 구조로",
    description:
      "PHP 레거시의 업무 로직을 **컨트롤러 / 서비스 / 레포지토리 / 모델** 계층으로 나눠 Laravel 차세대 시스템으로 옮겼습니다.",
  },
  {
    title: "데이터는 끝까지 확인",
    description:
      "마이그레이션 후 **데이터 정합성**을 검증하고, 장애로 누락된 문자·입금·신용정보 데이터를 추적해 **복구**했습니다.",
  },
  {
    title: "현장에서 요구사항 해결",
    description:
      "고객사에 상주하며 **요구사항 분석부터 운영 반영까지** 직접 맡았고, 미회수 5,000건 자동 회수 배치를 개발했습니다.",
  },
  {
    title: "화면과 서버를 함께",
    description:
      "SSAFY에서 **팀 프로젝트 4회(팀장 2회)**로 React·React Native를, 실무에서 **PHP·Laravel 백엔드**를 다뤘습니다.",
  },
];
