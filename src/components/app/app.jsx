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

    function handleModalClose() {
        setModalVisible(false);
    }

    function handleModalOpen() {
        setModalVisible(false);
    }


    const modal = (
        <Modal onClose={handleModalClose}>
            <p>Спасибо за внимание!</p>
            <p>Открывай меня, если станет скучно :)</p>
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
                            <BurgerIngredients ingredients={ingredients}/>
                        </div>
                        <BurgerConstructor ingredients={ingredients}/>
                    </main>

                </div>
            }
        </div>
  );
}

export default App;
