import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import React, {FC, useEffect} from "react";

import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot: HTMLElement = document.getElementById('modal-root') as HTMLElement;

interface IModal {
    modalActive: boolean,
    closeModal: () => void
}
const Modal: FC<IModal> = ({ modalActive, closeModal, children }) => {

    useEffect(() => {
        const handleEscClose = (evt: KeyboardEvent) => {
            if (modalActive && evt.key === 'Escape') {
                closeModal();
            }
        }
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }

    }, [modalActive, closeModal]);

    const handleOverlayClose = (evt: React.MouseEvent<HTMLElement>) => {
        const target = evt.target as HTMLElement;
        if (modalActive && target.dataset.element === 'overlay') {
            closeModal();
        }
    }

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay modalActive={modalActive} />
                <section onClick={handleOverlayClose} data-element="overlay" className={modalActive ? `${styles.modal} ${styles.modal_active}` : styles.modal}>
                    <div className={styles.modal__container}>
                        {children}
                        <button onClick={closeModal} className={styles.modal_close} type="button">
                            <CloseIcon type="primary" />
                        </button>
                    </div>
                </section>
            </>
        ),
        modalRoot
    );
}

export default Modal;
