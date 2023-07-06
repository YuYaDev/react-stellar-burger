import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import React, {useMemo, useState} from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";
import Ingredient from "../ingredient/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = React.useState("leaf")
    const bunList = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
    const sauceList = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]);
    const mainList = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleModalClose = () => {
        setModalVisible(false);
    }

    const handleModalOpen = (newModalData) => {
        setModalData(newModalData);
        setModalVisible(true);
    }
    const modal = (
        <Modal header='Детали ингредиента' onClose={handleModalClose}>
            {modalData && <IngredientDetails ingredientData={modalData}/>}
        </Modal>
    );

    return (
        <>
            {isModalVisible && modal}

        <div className={`${styles.tabWrapper} mb-5`}>
            <Tab value="leaf" active={current === 'leaf'} onClick={setCurrent}>Булки</Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
            <Tab value="filling" active={current === 'filling'} onClick={setCurrent}>Начинки</Tab>
        </div>

        <div className={`${styles.container} custom-scroll`}>
            <p className="text text_type_main-medium pt-5 pb-2" id="leaf">Булки</p>
            <div className={`${styles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
                {
                    bunList.map((item, index)=>{
                        return <Ingredient ingredientData={item} key={index} openModal={handleModalOpen} />
                    })
                }
            </div>

            <p className="text text_type_main-medium pt-5 pb-2" id="sauce">Соусы</p>
            <div className={`${styles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
                {
                    sauceList.map((item, index)=>{
                        return <Ingredient ingredientData={item} key={index} openModal={handleModalOpen}/>
                    })
                }
            </div>

            <p className="text text_type_main-medium pt-5 pb-2" id="filling">Начинки</p>
            <div className={`${styles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
                {
                    mainList.map((item, index)=>{
                        return <Ingredient ingredientData={item} key={index}  openModal={handleModalOpen} />
                    })
                }
            </div>
        </div>
        </>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
}

export default BurgerIngredients;