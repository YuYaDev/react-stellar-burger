import React, { useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

const URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {

    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [modalType, setModalType] = useState(null);

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

    const handleModalOpen = () => {
        setModalVisible(true);
    }

    const handleIngredientModal = (newModalData) => {
        setModalData(newModalData);
        setModalType('ingredientModal');
        handleModalOpen();
    }

    const handleOrderModal = () => {
        setModalType('orderModal');
        handleModalOpen();
    }

    const modal = (
        <>
            {
                modalType === 'ingredientModal' &&
                <Modal header='Детали ингредиента' onClose={handleModalClose}>
                    <IngredientDetails ingredientData={modalData}/>
                </Modal>
            }
            {
                modalType === 'orderModal' &&
                <Modal  header='' onClose={handleModalClose}>
                    <OrderDetails />
                </Modal>
            }
        </>
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
                            <BurgerIngredients ingredients={ingredients} openModal={handleIngredientModal} />
                        </div>
                        <BurgerConstructor ingredients={ingredients} openModal={handleOrderModal}/>
                    </main>

                </div>
            }
        </div>
  );
}

export default App;
