import styles from "./burger-ingredients.module.css";

import {
  useState,
  useEffect,
} from "react";


import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Ingredient from "../ingredient/ingredient";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { showMenuIngredient, hideMenuIngredient } from "../../services/actions/ingredient";

function BurgerIngredients() {
  const { items } = useSelector(state => state.ingredients);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const [modalVisible, setModalVisible] = useState(false);

  const buns = items.filter(item => item.type === 'bun');
  const sauces = items.filter(item => item.type === 'sauce');
  const mains = items.filter(item => item.type === 'main');

  const openModal = (element) => {
    dispatch(showMenuIngredient(element));
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      dispatch(hideMenuIngredient());
    }, 450);
  }

  return (
      <section className={styles.ingredients}>

        <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
                  <ul className={`${styles.ingredients__types} mt-10 custom-scroll`}>

                    <li >
                      <p className="text text_type_main-medium">Булки</p>
                      <ul className={`${styles.ingredients__items} pt-6 pr-4 pl-4`}>
                        {buns.map(item => <Ingredient key={item._id} item={item} openModal={() => openModal(item)} />)}
                      </ul>
                    </li>

                    <li  className="mt-10">
                      <p className="text text_type_main-medium">Соусы</p>
                      <ul className={`${styles.ingredients__items} pt-6 pr-4 pl-4`}>
                        {sauces.map(item => <Ingredient key={item._id} item={item} openModal={() => openModal(item)} />)}
                      </ul>
                    </li>

                    <li  className="mt-10">
                      <p className="text text_type_main-medium">Начинки</p>
                      <ul className={`${styles.ingredients__items} pt-6 pr-4 pl-4`}>
                        {mains.map(item => <Ingredient key={item._id} item={item} openModal={() => openModal(item)} />)}
                      </ul>
                    </li>

                  </ul>


        <Modal modalActive={modalVisible} closeModal={closeModal}>
          <IngredientDetails />
        </Modal>

      </section>
  );
}

export default BurgerIngredients;