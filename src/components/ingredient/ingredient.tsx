import styles from "./ingredient.module.css";
import {
    useState,
    useEffect, FC
} from "react";

import {
    CurrencyIcon,
    Counter
} from '@ya.praktikum/react-developer-burger-ui-components';

import { v4 as uuidv4 } from "uuid";
import { useDrag } from "react-dnd";
import {getAddedIngredient} from "../../services/selectors/selectors";
import {IIngredient} from "../../services/types/data";
import {useAppSelector} from "../../services/types";

interface IOneIngredient {
    item: IIngredient;
}
const Ingredient: FC<IOneIngredient> = ({ item }) => {
    const [count, setCount] = useState(0);

    const addedItem = { ...item, key: uuidv4()}
    const addedItems = useAppSelector(getAddedIngredient);

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: addedItem
    });

    useEffect(() => {
        if (item.type !== 'bun') {
            return setCount(addedItems.ingredients.filter(ingredient => ingredient._id === item._id).length);
        } else if (item.type === 'bun' && addedItems.bun !== null && item._id === addedItems.bun._id) {
            setCount(1);
        } else if (item.type === 'bun' && addedItems.bun !== null && item._id !== addedItems.bun._id) {
            setCount(0);
        } else if (item.type === 'bun' && addedItems.bun === null) {
            setCount(0);
        }
    }, [addedItems, item._id, item.type]);

    return (
        <li ref={dragRef} key={item._id} className={styles.ingredients__item}>
            <img src={item.image} alt={item.name} className="pr-4 pl-4"/>
            <div className={`${styles.ingredients__price} mt-1`}>
                <p className="text text_type_digits-default">{item.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.ingredients__paragraph} text text_type_main-default mt-1`}>{item.name}</p>
            {
                count !== 0 && <Counter count={count} size="default" />
            }
        </li>
    );
}

export default Ingredient;
