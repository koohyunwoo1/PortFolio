import Modal from "../../components/ui/Modal";
import styles from "./ImageLightbox.module.css";

const ImageLightbox = ({ src, onClose }) => (
  <Modal isOpen={Boolean(src)} onClose={onClose} variant="lightbox" ariaLabel="이미지 확대 보기">
    <img src={src} alt="" className={styles.image} />
  </Modal>
);

export default ImageLightbox;
