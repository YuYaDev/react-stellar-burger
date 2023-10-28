import styles from "./order-item.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {getIngredientList} from "../../services/selectors/selectors";
import {FC, useMemo} from "react";
import IngredientImageGallery from "../ingredient-image-gallery/ingredient-image-gallery";
import {IIngredient, IOrder} from "../../services/types/data";
import {useAppSelector} from "../../services/types";

interface IOrderItem {
    item: IOrder,
    showStatus: boolean
}
const OrderItem: FC<IOrderItem> = ({ item, showStatus }) => {
    const items = useAppSelector(getIngredientList);
    const orderIngredients = items.filter((ingredient: IIngredient) => item.ingredients.includes(ingredient._id));

    const totalPrice = useMemo(() => {
        return orderIngredients.reduce((acc: number, item: IIngredient) => {
            return acc + item.price;
        }, 0);
    }, [orderIngredients]);


    return (
        <li key={item._id} className={`${styles.orderItem} p-4`}>
            <div className={`${styles.orderItem__numDate} pb-4`}>
                <p className={'text text_type_digits-default'}>#{item.number}</p>
                <p className={'text text_type_main-default text_color_inactive'}><FormattedDate date={new Date(item.createdAt)} /></p>
            </div>
            <p className={'text text_type_main-medium pb-2'}>{item.name}</p>
            {
                showStatus &&
                <p className={`${styles.orderItem__status} text text_type_main-small pb-2`}>
                {item.status === 'done' ? 'Выполнен' : item.status === 'created' ? 'Создан' : 'В работе'}
                </p>
            }
            <div className={`${styles.orderItem__img} pt-2`}>
                <IngredientImageGallery ingredients={orderIngredients} />
                <div className={`${styles.orderItem__price}`}>
                    <p className="text text_type_digits-default">{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </li>
    );
}

export default OrderItem;
