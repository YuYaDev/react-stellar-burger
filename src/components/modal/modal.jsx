import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "../modal/modal.module.css";
import {CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import {useEffect} from "react";

const modalRoot = document.getElementById("react-modals");

const Modal = ({header, children, onClose}) => {

    useEffect(() => {
        function escFunction(event){
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", escFunction);
        return() => { document.removeEventListener("keydown", escFunction);}

    }, []);


    return ReactDOM.createPortal(
        (
            <>
               <ModalOverlay onClose={onClose}/>
                <div className={`${styles.container} pt-4 pl-4 pr-4 pb-15`}>
                    <div className={`${styles.header} p-4 m-2`}>
                        <p className="text text_type_main-large">{header}</p>
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

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;