import RunUsThumbnail from "../assets/RunUs.png";
import PillSooThumbnail from "../assets/PillSoo.png";
import MusicThumbnail from "../assets/Music.png";
import GflexThumbnail from "../assets/Gflex.png";

const screenshots = (dir, count, ext) =>
  Array.from({ length: count }, (_, index) => `/assets/${dir}/image${index}.${ext}`);

export const projects = [
  {
    id: "runus",
    title: "RunUs",
    summary: "위치 기반 실시간 개인·팀 러닝 서비스",
    thumbnail: RunUsThumbnail,
    images: screenshots("RunUs", 6, "gif"),
    period: "2024.07.05 - 2024.08.16 (6주)",
    link: "https://github.com/koohyunwoo1/RunUs",
    skills: ["JavaScript", "React", "Context API", "Geolocation API", "OpenWeatherMap API"],
    tools: ["Visual Studio", "MySQL"],
    team: "7명 (백엔드 5명, 프론트엔드 2명)",
    roles: ["기획", "프론트엔드 팀장"],
    features: [
      {
        title: "메인 페이지",
        items: [
          "현재 위치 정보를 지도로 표시",
          "OpenWeatherMap API를 이용해 현재 위치의 날씨예보를 렌더링",
        ],
      },
      {
        title: "리포트 페이지",
        items: [
          "월별로 운동 거리 데이터를 시각화하여 recharts 라이브러리를 사용하여 그래프로 제공",
          "다양한 운동 모드를 기준으로 필터링 기능 구현",
          "페이지 상단으로 빠르게 이동할 수 있는 상단으로 이동 버튼 추가",
          "무한 스크롤 구현하여, 리포트 데이터를 효율적으로 렌더링",
        ],
      },
      {
        title: "러닝 페이지",
        items: [
          "Geolocation API를 활용하여 사용자의 이동 경로를 실시간으로 추적하고 거리 변화 반영",
          "위치 튐 현상 해결을 위한 알고리즘 개발, 위치 오차를 5m 이내로 개선",
          "팀 러닝 모드에서 WebSocket을 이용하여 팀원의 위치를 실시간으로 지도에 렌더링",
          "운동 시작 전 3-2-1 카운트다운 화면 구현으로 사용자 경험 향상",
          "팀 방에 입장하기 위해 QR 코드 스캔 기능을 도입, 사용자 편의성 강화",
        ],
      },
    ],
  },
  {
    id: "pillsoo",
    title: "PillSoo",
    summary: "OCR·맞춤 추천 기반 영양제 검색 앱",
    thumbnail: PillSooThumbnail,
    images: screenshots("PillSoo", 7, "jpg"),
    period: "2024.08.26 - 2024.10.11 (7주)",
    link: "https://github.com/koohyunwoo1/Pillsoo",
    skills: ["TypeScript", "ReactNative", "Redux", "Google Vision API"],
    tools: ["Visual Studio", "MySQL"],
    team: "6명 (백엔드 4명, 프론트엔드 2명)",
    roles: ["기획", "프론트엔드 팀장"],
    features: [
      {
        title: "검색 페이지",
        items: [
          "영양제 검색 시, 실시간으로 키 입력에 따라 동적으로 영양제 정보를 렌더링하여 사용자 편의성 향상",
          "무한 스크롤 구현을 통해 효율적으로 영양제 정보를 렌더링, 페이지 로딩 시간을 최소화하고 사용자 경험 개선",
        ],
      },
      {
        title: "영양제 상세 페이지",
        items: [
          "영양제 상세 정보 (효능, 주의사항, 유통기한 등)을 동적으로 렌더링하여 사용자가 필요한 정보를 손쉽게 확인",
          "복용중 클릭 시, 해당 영양제를 위시 리스트로 자동으로 전송하여 편리한 관리 제공",
          "위시 리스트 담기 클릭 시, 선택된 영양제를 위시 리스트에 추가하여 개인화된 관리 기능 제공",
        ],
      },
      {
        title: "위시 리스트/복용중인 페이지",
        items: [
          "위시 리스트와 복용 중인 영양제를 리스트 형식으로 효율적으로 렌더링하여 사용자가 한눈에 볼 수 있도록 구현",
          "구매하러 가기 버튼을 클릭 시, 사용자가 네이버 쇼핑으로 직접 이동할 수 있도록 연동하여 편리한 쇼핑 경험 제공",
        ],
      },
      {
        title: "영양제 추천 페이지",
        items: [
          "사용자 맞춤형 영양제 추천 기능을 구현하여, 개별 사용자의 건강 상태에 최적화된 영양제를 자동으로 렌더링",
          "건강 카테고리별 영양제 추천 페이지에서, 사용자가 영양제를 가로 슬라이드 형식으로 손쉽게 탐색할 수 있도록 UI 개선",
          "현재 건강 상태를 텍스트로 입력하면, 입력 내용에 맞는 영양제를 추천해주는 기능과 함께 로딩 스피너를 구현하여 사용자가 대기하는 동안 더욱 직관적인 UX 제공",
          "OCR 스캔 기능을 추가하여 영양제의 로고나 이름을 스캔한 후, 자동으로 영양제를 검색할 수 있는 기능 구현",
          "스캔 결과가 정확하지 않은 경우, 사용자가 텍스트를 수정할 수 있는 인터페이스를 제공하여 정확한 정보를 손쉽게 입력할 수 있도록 UX 개선",
        ],
      },
    ],
  },
  {
    id: "music",
    title: "Music",
    summary: "음악 게임과 실시간 채팅을 제공하는 음악 플랫폼",
    thumbnail: MusicThumbnail,
    images: screenshots("Music", 4, "png"),
    period: "2024.10.14 - 2024.11.19 (6주)",
    link: "https://github.com/koohyunwoo1/Music_platform_JaeGuSong",
    skills: ["TypeScript", "React"],
    tools: ["Visual Studio", "MySQL"],
    team: "5명 (백엔드 2명, 프론트엔드 3명)",
    roles: ["기획", "프론트엔드"],
    features: [
      {
        title: "게임 페이지",
        items: [
          "Tone 라이브러리를 활용하여 음정을 가져와 들려주는 음감을 맞추는 절대음감 게임 구현",
          "실제 드럼 소리를 재생하고, 앞서 나오는 드럼 소리를 듣고 그대로 따라 치는 게임 구현",
          "사용자의 목소리 옥타브를 활용하여 음표를 피하는 게임 구현",
        ],
      },
      {
        title: "채팅",
        items: [
          "Spring WebFlux를 활용하여 비동기적이고 실시간으로 동작하는 1:1 채팅 시스템 구현",
          "실시간으로 현재 참여 중인 채팅방 리스트를 동적으로 렌더링하여 사용자 경험 향상",
          "채팅방 나가기 버튼을 통해 사용자가 채팅방을 떠날 때 즉시 해당 채팅방을 동적으로 삭제하는 기능 구현",
        ],
      },
    ],
  },
  {
    id: "gflex",
    title: "Gflex",
    summary: "기분·무드 기반 영화 추천 서비스",
    thumbnail: GflexThumbnail,
    images: screenshots("Gflex", 12, "png"),
    period: "2024.05.16 - 2024.05.24 (1주)",
    link: "https://github.com/koohyunwoo1/G-flex",
    skills: ["JavaScript", "Vue"],
    tools: ["Visual Studio"],
    team: "2명 (백엔드 1명, 프론트엔드 1명)",
    roles: ["기획", "프론트엔드"],
    features: [
      {
        title: "메인 페이지",
        items: [
          "G-flex 추천 Top 10 영화를 슬라이드 형식으로 보여주는 carousel 라이브러리 구현",
          "영화 검색 기능을 제공하는 검색 바 추가로 사용자의 편리한 영화 탐색 지원",
        ],
      },
      {
        title: "영화 상세 페이지",
        items: [
          "영화 정보를 동적으로 렌더링하여 최신 정보 제공",
          "좋아요 기능 구현으로, 하트 아이콘 클릭 시 색상 변화와 좋아요 숫자 업데이트",
        ],
      },
      {
        title: "무드/기분별 영화 선택 페이지",
        items: [
          "기분/무드 태그 버튼을 사용하여 선택 시 버튼 색상 변화",
          "선택된 태그로 영화 검색 후, 검색 버튼 클릭 시 화면 자동 스크롤 및 해당 영화 포스터 렌더링",
        ],
      },
    ],
  },
];
