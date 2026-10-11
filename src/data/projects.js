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
          "recharts로 월별 운동 거리 데이터를 그래프로 시각화",
          "다양한 운동 모드를 기준으로 필터링 기능 구현",
          "상단 이동 버튼 추가",
          "무한 스크롤로 리포트 데이터를 나눠서 렌더링",
        ],
      },
      {
        title: "러닝 페이지",
        items: [
          "Geolocation API를 활용하여 사용자의 이동 경로를 실시간으로 추적하고 거리 변화 반영",
          "위치 튐 현상 해결을 위한 알고리즘 개발, 위치 오차를 5m 이내로 개선",
          "팀 러닝 모드에서 WebSocket을 이용하여 팀원의 위치를 실시간으로 지도에 렌더링",
          "운동 시작 전 3-2-1 카운트다운 화면 구현",
          "QR 코드 스캔으로 팀 방에 입장하는 기능 구현",
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
    skills: ["TypeScript", "React Native", "Redux", "Google Vision API"],
    tools: ["Visual Studio", "MySQL"],
    team: "6명 (백엔드 4명, 프론트엔드 2명)",
    roles: ["기획", "프론트엔드 팀장"],
    features: [
      {
        title: "검색 페이지",
        items: [
          "키 입력에 따라 영양제 검색 결과를 실시간으로 렌더링",
          "무한 스크롤로 검색 결과를 나눠 불러와 초기 로딩 시간 단축",
        ],
      },
      {
        title: "영양제 상세 페이지",
        items: [
          "영양제 상세 정보(효능, 주의사항, 유통기한 등) 렌더링",
          "‘복용중’ 클릭 시 해당 영양제를 위시 리스트로 자동 전송",
          "‘위시 리스트 담기’ 클릭 시 위시 리스트에 추가",
        ],
      },
      {
        title: "위시 리스트/복용중인 페이지",
        items: [
          "위시 리스트와 복용 중인 영양제 목록 화면 구현",
          "‘구매하러 가기’ 버튼으로 네이버 쇼핑 검색 결과에 바로 연결",
        ],
      },
      {
        title: "영양제 추천 페이지",
        items: [
          "사용자 건강 상태 기반 맞춤 영양제 추천 화면 구현",
          "건강 카테고리별 추천 영양제를 가로 슬라이드로 탐색하는 UI 구현",
          "건강 상태를 텍스트로 입력하면 맞는 영양제를 추천하는 기능과 대기 중 로딩 스피너 구현",
          "Google Vision API OCR로 영양제 로고·이름을 스캔해 자동 검색",
          "OCR 인식이 틀린 경우 텍스트를 직접 수정할 수 있는 입력 단계 추가",
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
          "Tone.js로 음정을 재생하고 맞히는 절대음감 게임 구현",
          "드럼 패턴을 듣고 따라 치는 리듬 게임 구현",
          "목소리 음높이(옥타브)로 조작해 음표를 피하는 게임 구현",
        ],
      },
      {
        title: "채팅",
        items: [
          "Spring WebFlux 기반 실시간 1:1 채팅 구현",
          "참여 중인 채팅방 목록 실시간 갱신",
          "채팅방 나가기 시 목록에서 즉시 제거",
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
          "추천 Top 10 영화 캐러셀 구현",
          "영화 검색 바 구현",
        ],
      },
      {
        title: "영화 상세 페이지",
        items: [
          "영화 상세 정보 렌더링",
          "좋아요 토글 및 카운트 갱신",
        ],
      },
      {
        title: "무드/기분별 영화 선택 페이지",
        items: [
          "기분·무드 태그 선택 UI 구현",
          "선택한 태그로 영화를 검색하고 결과 위치로 자동 스크롤",
        ],
      },
    ],
  },
];
