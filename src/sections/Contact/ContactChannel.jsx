import { FaCheck, FaEnvelope, FaGithub, FaRegCopy } from "react-icons/fa";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import styles from "./ContactChannel.module.css";

const ICONS = {
  email: FaEnvelope,
  github: FaGithub,
};

const ContactChannel = ({ contact }) => {
  const { isCopied, copy } = useCopyToClipboard();
  const Icon = ICONS[contact.icon];
  const isExternal = contact.href.startsWith("http");

  return (
    <div className={styles.channel}>
      <span className={styles.icon}>
        <Icon aria-hidden />
      </span>
      <div className={styles.info}>
        <span className={styles.label}>{contact.label}</span>
        <a
          href={contact.href}
          className={styles.value}
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {contact.value}
        </a>
      </div>
      <button
        type="button"
        className={`${styles.copy} ${isCopied ? styles.copied : ""}`}
        onClick={() => copy(contact.value)}
        aria-label={`${contact.label} 복사`}
      >
        {isCopied ? <FaCheck aria-hidden /> : <FaRegCopy aria-hidden />}
        <span aria-live="polite">{isCopied ? "복사됨" : "복사"}</span>
      </button>
    </div>
  );
};

export default ContactChannel;
