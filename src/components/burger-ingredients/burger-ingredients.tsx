import styles from "./burger-ingredients.module.css";

import { useEffect } from "react";

import Ingredient from "../ingredient/ingredient";
import { getIngredients } from "../../services/actions/ingredients";
import {Link, useLocation} from "react-router-dom";
import {getIngredientList} from "../../services/selectors/selectors";
import {useAppDispatch, useAppSelector} from "../../services/types";

function BurgerIngredients() {
  const items = useAppSelector(getIngredientList);
  let location = useLocation();

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
                {buns.map((item) =>
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
                {sauces.map((item) =>
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
                {mains.map((item) =>
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
