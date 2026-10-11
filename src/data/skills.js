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
      "ES6 문법 활용 (템플릿 리터럴, 화살표 함수, 스프레드 연산자 등)",
      "비동기 작업 처리 (async/await, Fetch API)",
    ],
  },
  {
    name: "React",
    image: skillImage("React"),
    category: "Frontend",
    isMain: true,
    description: [
      "재사용성 높은 컴포넌트 설계",
      "상태 관리 라이브러리 통합 (Redux, Zustand 등)",
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
      "타입 안정성 제공 (오류 감소, 유지보수 용이)",
      "React와 결합해 안전한 상태 관리",
    ],
  },
  {
    name: "React Native",
    image: skillImage("ReactNative"),
    category: "Mobile",
    description: [
      "모바일 앱 개발 (iOS/Android 지원)",
      "네이티브 모듈 연동, 애니메이션 처리",
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
    description: ["데이터 분석 및 자동화 스크립트 작성", "Django 웹 서버 구축 경험"],
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
    description: ["버전 관리 및 브랜치 전략 적용", "CI/CD 자동화 (GitHub Actions)"],
  },
  {
    name: "JIRA",
    image: skillImage("Jira"),
    category: "Collaboration",
    description: ["애자일 프로젝트 관리", "작업 진행 상황 시각적 관리"],
  },
  {
    name: "Figma",
    image: skillImage("Figma"),
    category: "Collaboration",
    description: ["UI/UX 프로토타이핑", "Auto Layout 및 컴포넌트 관리"],
  },
  {
    name: "Notion",
    image: skillImage("Notion"),
    category: "Collaboration",
    description: ["팀 협업 및 프로젝트 관리", "데이터베이스 및 템플릿 생성"],
  },
];

// **텍스트** 는 강조 표시된다 (components/ui/HighlightText).
export const softSkills = [
  {
    title: "Communication",
    description:
      "저는 **소통**을 가장 중요하게 생각하며, **팀워크**를 통해 협력하는 것을 선호합니다. 팀원들과의 열린 대화를 통해 아이디어를 나누고, 명확하게 의견을 전달하는 것이 중요하다고 믿습니다.",
  },
  {
    title: "Problem-Solving",
    description:
      "문제를 분석하고 해결하는 데 있어 **논리적이고 창의적인 접근**을 중요시합니다. 복잡한 문제를 단계적으로 나누어 해결하고, 개발 과정에서 발생하는 **UI/UX와 데이터 문제**를 빠르게 파악하고 해결하려 노력합니다.",
  },
  {
    title: "Adaptability",
    description:
      "빠르게 변화하는 기술 환경에 **적응하는 능력**이 중요하다고 생각합니다. 새로운 기술이나 프레임워크를 유연하게 학습하고, 필요할 경우 기존의 방식을 바꾸는 데 두려움이 없습니다.",
  },
  {
    title: "Attention to Detail",
    description:
      "**작은 디테일**에도 신경 쓰는 것이 개발의 핵심이라고 생각합니다. 인터페이스의 작은 요소까지 꼼꼼히 점검하며, 퍼포먼스 최적화와 디자인 일관성에 주의를 기울입니다.",
  },
];
