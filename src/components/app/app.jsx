import React, { useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

const URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {

    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalVisible, setModalVisible] = useState(true);

    const [modalData, setModalData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((actualData) => {
                setIngredients(actualData.data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });

        document.addEventListener("keydown", escFunction);

    }, []);


    function escFunction(event){
        if (event.key === "Escape") {
            handleModalClose();
        }
    }

    const  handleModalClose = () => {
        setModalVisible(false);
    }

    const handleModalOpen = (newModalData) => {
        setModalData(newModalData);
        setModalVisible(true);
    }


    const modal = (
        <Modal header='Я заголовок' onClose={handleModalClose}>
            {modalData.name}
        </Modal>
    );

    return (
        <div style={{overflow: 'hidden'}}>

            {isModalVisible && modal}

            {loading && <div>Данные загружаются...</div>}
            {error && (
                <div>{`Возникла проблема загрузки данных - ${error}`}</div>
            )}
            {loading === false && ingredients &&
                <div className={styles.app}>
                    <AppHeader/>

                    <main className={styles.main}>
                        <div>
                            <p className="text text_type_main-large pb-5">Соберите бургер</p>
                            <BurgerIngredients ingredients={ingredients} openModal={handleModalOpen} />
                        </div>
                        <BurgerConstructor ingredients={ingredients}/>
                    </main>

                </div>
            }
        </div>
  );
}

export default App;
