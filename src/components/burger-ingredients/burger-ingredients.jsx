import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import React, { useEffect, useMemo, useState} from "react";
import Ingredient from "../ingredient/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {getMenuIngredients} from "../../services/actions/ingredients";
import {DELETE_MODULE_INGREDIENT, SET_MODULE_INGREDIENT} from "../../services/actions";



const BurgerIngredients = () => {

  // Get ingredients from server
  const { ingredientsRequest, ingredientsFailed, ingredientList }  = useSelector(
      (store) => store.ingredients
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuIngredients());

  }, []);


  // Parse ingredients
  const [current, setCurrent] = React.useState("leaf");
  const bunList = useMemo(
    () => ingredientList.filter((item) => item.type === "bun"),
    [ingredientList]
  );
  const sauceList = useMemo(
    () => ingredientList.filter((item) => item.type === "sauce"),
    [ingredientList]
  );
  const mainList = useMemo(
    () => ingredientList.filter((item) => item.type === "main"),
    [ingredientList]
  );

  function animateTab(){
    const navbarPosition = document.getElementById('nav').getBoundingClientRect().y;
    const leafPosition = document.getElementById("leaf").getBoundingClientRect().y;
    const saucePosition = document.getElementById("sauce").getBoundingClientRect().y;
    const fillingPosition = document.getElementById("filling").getBoundingClientRect().y;

    const distances = [
      Math.abs(leafPosition - navbarPosition),
      Math.abs(fillingPosition - navbarPosition),
      Math.abs(saucePosition - navbarPosition)
    ];

    const min = Math.min(...distances);
    const minIndex = distances.indexOf(min);
    switch (minIndex) {
      case 0:
        setCurrent("leaf")
        break;
      case 1:
        setCurrent("filling")
        break;
      case 2:
        setCurrent("sauce")
        break;
      default:
        setCurrent("leaf")
    }
  }

  // Modals
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    dispatch({
      type: DELETE_MODULE_INGREDIENT
    })
    setModalVisible(false);
  };

  const handleModalOpen = (ingredient) => {
    dispatch({
      type: SET_MODULE_INGREDIENT,
      data: ingredient
    })
    setModalVisible(true);
  };
  const modal = (
    <Modal header="Детали ингредиента" onClose={handleModalClose}>
      <IngredientDetails />
    </Modal>
  );

  return (
    <>
      {isModalVisible && modal}
      {ingredientsRequest && <p>Загрузка...</p>}
      {ingredientsRequest === false && ingredientsFailed && (
          <p>Произошла ошибка при получении данных</p>
      )}
      {ingredientsRequest === false && ingredientList.length > 0 && (
          <>
            <div className={`${styles.tabWrapper} mb-5`} id="nav">
            <Tab value="leaf" active={current === "leaf"} onClick={setCurrent}>
              Булки
            </Tab>
            <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
              Соусы
            </Tab>
            <Tab
              value="filling"
              active={current === "filling"}
              onClick={setCurrent}
            >
              Начинки
            </Tab>
          </div>

          <div className={`${styles.container} custom-scroll`} onScroll={animateTab}>
            <p className="text text_type_main-medium pt-5 pb-2" id="leaf">
              Булки
            </p>
            <div className={`${styles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
              {bunList.map((item, index) => {
                return (
                  <Ingredient
                    ingredientData={item}
                    key={index}
                    openModal={handleModalOpen}
                  />
                );
              })}
            </div>

            <p className="text text_type_main-medium pt-5 pb-2" id="sauce">
              Соусы
            </p>
            <div className={`${styles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
              {sauceList.map((item, index) => {
                return (
                  <Ingredient
                    ingredientData={item}
                    key={index}
                    openModal={handleModalOpen}
                  />
                );
              })}
            </div>

            <p className="text text_type_main-medium pt-5 pb-2" id="filling">
              Начинки
            </p>
            <div className={`${styles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
              {mainList.map((item, index) => {
                return (
                  <Ingredient
                    ingredientData={item}
                    key={index}
                    openModal={handleModalOpen}
                  />
                );
              })}
            </div>
        </div></>)}
    </>
  );
};

export default BurgerIngredients;
