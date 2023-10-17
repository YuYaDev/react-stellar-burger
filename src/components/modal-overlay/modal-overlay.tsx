import styles from "./modal-overlay.module.css";
import {FC} from "react";

interface IModalOverlay {
    modalActive: boolean
}
const ModalOverlay: FC<IModalOverlay> = ({modalActive}) => {
    return (
        <div className={modalActive ? `${styles.overlay} ${styles.overlay_active}` : styles.overlay}></div>
    );
}

export default ModalOverlay;
