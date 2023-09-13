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
import {Link, useLocation, useNavigate} from "react-router-dom";
import {getIngredientList} from "../../utils/store";

function BurgerIngredients() {
  const items = useSelector(getIngredientList);
  let location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const buns = items.filter(item => item.type === 'bun');
  const sauces = items.filter(item => item.type === 'sauce');
  const mains = items.filter(item => item.type === 'main');

  return (
      <section className={styles.ingredients}>
        <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
          <ul className={`${styles.ingredients__types} mt-10 custom-scroll`}>
            <li >
              <p className="text text_type_main-medium">Булки</p>
              <ul className={`${styles.ingredients__items} pt-6 pr-4 pl-4`}>
                {buns.map(item =>
                    <Link
                        className={styles.link}
                        key={item._id}
                        to={`/ingredients/${item._id}`}
                        state={{ backgroundLocation: location }}
                    >
                      <Ingredient key={item._id} item={item} />
                    </Link>
                )}
              </ul>
            </li>

            <li  className="mt-10">
              <p className="text text_type_main-medium">Соусы</p>
              <ul className={`${styles.ingredients__items} pt-6 pr-4 pl-4`}>
                {sauces.map(item =>
                    <Link
                        className={styles.link}
                        key={item._id}
                        to={`/ingredients/${item._id}`}
                        state={{ backgroundLocation: location }}
                    >
                      <Ingredient key={item._id} item={item}  />
                    </Link>
                )}
              </ul>
            </li>

            <li  className="mt-10">
              <p className="text text_type_main-medium">Начинки</p>
              <ul className={`${styles.ingredients__items} pt-6 pr-4 pl-4`}>
                {mains.map(item =>
                    <Link
                        className={styles.link}
                        key={item._id}
                        to={`/ingredients/${item._id}`}
                        state={{ backgroundLocation: location }}
                    >
                    <Ingredient key={item._id} item={item}  />
                    </Link>
                )}
              </ul>
            </li>
          </ul>
      </section>
  );
}

export default BurgerIngredients;
