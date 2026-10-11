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
    "JavaScript와 php를 주 언어로 화면과 서버를 함께 다루는 풀스택 개발자 구현우입니다. 보이는 완벽함과 보이지 않는 곳의 정확함을 함께 추구합니다.",
  intro: [
    "자바스크립트로 가치를 더하는 풀스택 개발자.",
    "보이는 완벽함을 추구합니다.",
  ],
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
