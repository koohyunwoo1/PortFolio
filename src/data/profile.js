import profilePhoto from "../assets/증명사진.jpg";

export const profile = {
  name: "구현우",
  englishName: "Koo HyunWoo",
  role: "Full-stack Developer",
  tagline: "Full-stack Developer",
  birth: "1999.07.07",
  since: "2024",
  photo: profilePhoto,
  trainingHours: 1600,
  headline: {
    lead: "화면부터 데이터까지 책임지는",
    accent: "풀스택 개발자",
  },
  summary:
    "JavaScript와 PHP를 주 언어로 화면과 서버를 함께 다루는 풀스택 개발자 구현우입니다. 레거시 시스템을 차세대 구조로 옮기고, 운영 장애를 직접 해결해 왔습니다.",
  intro:
    "SSAFY에서 웹·모바일 프론트엔드를, 실무에서 백엔드와 데이터 마이그레이션을 맡았습니다.",
  keywords: ["JavaScript", "React", "Laravel"],
};

// icon 값은 sections/Contact/ContactChannel 의 아이콘 맵 키와 일치해야 한다.
export const contacts = [
  {
    id: "email",
    icon: "email",
    label: "Email",
    value: "kjklovekhw@gmail.com",
    href: "mailto:kjklovekhw@gmail.com",
  },
  {
    id: "github",
    icon: "github",
    label: "GitHub",
    value: "koohyunwoo1",
    href: "https://github.com/koohyunwoo1",
  },
];
