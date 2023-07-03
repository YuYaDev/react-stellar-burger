import styles from "../modal-overlay/modal-overlay.module.css";

const ModalOverlay = ({onClose}) => {
    return (
        <div className={styles.container} onClick={onClose}>
        </div>
    );
}

// ModalOverlay.propTypes = {
//     ingredientData: ingredientPropType.isRequired
// }

export default ModalOverlay;