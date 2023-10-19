import styles from "./burger-ingredients.module.css";
import Ingredient from "../ingredient/ingredient";
import {Link, useLocation} from "react-router-dom";
import {getIngredientList} from "../../services/selectors/selectors";
import { useAppSelector} from "../../services/types";
import {useEffect, useMemo, useState} from "react";
import {useInView} from "react-intersection-observer";
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const items = useAppSelector(getIngredientList);
  let location = useLocation();

  const buns = items.filter(item => item.type === 'bun');
  const sauces = items.filter(item => item.type === 'sauce');
  const mains = items.filter(item => item.type === 'main');

  const Tabs = useMemo(() => {
    return {
      BUNS: 'buns',
      SAUCES: 'sauces',
      MAINS: 'mains'
    };
  }, []);

  const [current, setCurrent] = useState(Tabs.BUNS);

  const { ref: refBuns, inView: inViewBuns } = useInView({ threshold: 0 });
  const { ref: refSauces, inView: inViewSauces } = useInView({ threshold: 1 });
  const { ref: refMains, inView: inViewMains } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewBuns) {
      setCurrent(Tabs.BUNS);
    }
    if (inViewSauces) {
      setCurrent(Tabs.SAUCES)
    }
    if (inViewMains) {
      setCurrent(Tabs.MAINS)
    }
  }, [inViewBuns, inViewSauces, inViewMains]);

  const handleTabClick = (e: string) => {
    setCurrent(e);
  };

  return (
      <section className={styles.ingredients}>
        <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>

          <div className={`${styles.ingredients__tabs} mt-5`}>
            <Tab value={Tabs.BUNS} active={current === Tabs.BUNS} onClick={handleTabClick}>
              Булки
            </Tab>
            <Tab value={Tabs.SAUCES} active={current === Tabs.SAUCES} onClick={handleTabClick}>
              Соусы
            </Tab>
            <Tab value={Tabs.MAINS} active={current === Tabs.MAINS} onClick={handleTabClick}>
              Начинки
            </Tab>
          </div>


          <ul className={`${styles.ingredients__types} mt-10 custom-scroll`}>
            <li ref={refBuns}>
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

            <li className="mt-10" ref={refSauces}>
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

            <li className="mt-10" ref={refMains}>
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
