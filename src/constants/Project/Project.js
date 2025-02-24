import MusicThumbnail from "../../assets/Music.png";
import GflexThumbnail from "../../assets/Gflex.png";
import PillSooThumbnail from "../../assets/PillSoo.png";
import RunUsThumbnail from "../../assets/RunUs.png";

const projects = [
  {
    id: 1,
    title: "RunUs",
    thumbnail: RunUsThumbnail,
    images: Array.from(
      { length: 6 },
      (_, index) => `/assets/RunUs/image${index}.gif`
    ),
    period: "2024.07.05 - 2024.08.16 (6주)",
    link: "https://github.com/koohyunwoo1/RunUs",
  },
  {
    id: 2,
    title: "PillSoo",
    thumbnail: PillSooThumbnail,
    images: Array.from(
      { length: 7 },
      (_, index) => `/assets/PillSoo/image${index}.jpg`
    ),
    period: "2024.08.26 - 2024.10.11 (7주)",
    link: "https://github.com/koohyunwoo1/Pillsoo",
  },
  {
    id: 3,
    title: "Music",
    thumbnail: MusicThumbnail,
    images: Array.from(
      { length: 4 },
      (_, index) => `/assets/Music/image${index}.png`
    ),
    period: "2024.10.14 - 2024.11.19 (6주)",
    link: "https://github.com/koohyunwoo1/Music_platform_JaeGuSong",
  },
  {
    id: 4,
    title: "Gflex",
    thumbnail: GflexThumbnail,
    images: Array.from(
      { length: 12 },
      (_, index) => `/assets/Gflex/image${index}.png`
    ),
    period: "2024.05.16 - 2024.05.24 (1주)",
    link: "https://github.com/koohyunwoo1/G-flex",
  },
];

export default projects