import styles from "./HighlightText.module.css";

// "**강조**" 구문을 <strong> 으로 변환
const HighlightText = ({ text }) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className={styles.highlight}>
        {part}
      </strong>
    ) : (
      part
    )
  );

export default HighlightText;
