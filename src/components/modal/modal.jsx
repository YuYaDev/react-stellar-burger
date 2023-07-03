import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "../modal/modal.module.css";
import {CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById("react-modals");

const Modal = ({header, children, onClose}) => {

    return ReactDOM.createPortal(
        (
            <>
               <ModalOverlay onClose={onClose}/>
                <div className={`${styles.container} p-4`}>
                    {header && <p className="text text_type_main-large p-4">{header}</p>}
                    <button className={styles.closeIcon} onClick={onClose}>
                        <CloseIcon type="primary" />
                    </button>
                    {children}
                </div>
            </>
        ),
        modalRoot
    );
}
export default Modal;