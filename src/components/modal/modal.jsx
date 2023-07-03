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
                <div className={`${styles.container} pt-4 pl-4 pr-4 pb-15`}>
                    <div className={`${styles.header} p-4 m-2`}>
                        {header && <p className="text text_type_main-large">{header}</p>}
                        <button className={styles.closeIcon} onClick={onClose}>
                            <CloseIcon type="primary" />
                        </button>
                    </div>
                    {children}
                </div>
            </>
        ),
        modalRoot
    );
}
export default Modal;