import { FaCheck, FaCode } from "react-icons/fa";
import { profile } from "../../data/profile";
import { certificates } from "../../data/history";
import { techStack } from "../../data/skills";
import styles from "./IdentityCard.module.css";

const cardNumberTail = profile.birth.slice(-5).replace(".", "");
const latestCertificate = certificates[0];
const mainStack = techStack
  .filter((skill) => skill.isMain)
  .map((skill) => skill.name)
  .join(" · ");

// 히어로 우측 장식: 카드 형태의 프로필 + 떠 있는 정보 칩
const IdentityCard = () => (
  <div className={styles.wrap} aria-hidden>
    <div className={styles.card}>
      <div className={styles.top}>
        <span>DEVELOPER CARD</span>
        <span>{profile.role.toUpperCase()}</span>
      </div>
      <div className={styles.chip} />
      <p className={styles.number}>•••• •••• •••• {cardNumberTail}</p>
      <div className={styles.bottom}>
        <div>
          <span className={styles.label}>CARD HOLDER</span>
          <span className={styles.value}>{profile.englishName.toUpperCase()}</span>
        </div>
        <div>
          <span className={styles.label}>SINCE</span>
          <span className={styles.value}>{profile.since}</span>
        </div>
      </div>
    </div>

    {latestCertificate && (
      <div className={`${styles.float} ${styles.floatTop}`}>
        <span className={styles.floatIcon}>
          <FaCheck />
        </span>
        {latestCertificate.title} {latestCertificate.subtitle}
      </div>
    )}
    <div className={`${styles.float} ${styles.floatBottom}`}>
      <span className={`${styles.floatIcon} ${styles.floatIconPrimary}`}>
        <FaCode />
      </span>
      {mainStack}
    </div>
  </div>
);

export default IdentityCard;
