import styles from "./order-item.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientList} from "../../services/selectors/selectors";
import {useEffect, useMemo} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import IngredientImageGallery from "../ingredient-image-gallery/ingredient-image-gallery";
import {orderPropType} from "../../utils/prop-types";
import propTypes from "prop-types";

function OrderItem(props) {
    const { item, showStatus } = props;
    const items = useSelector(getIngredientList);
    const orderIngredients = items.filter(ingredient => item.ingredients.includes(ingredient._id));
    const dispatch = useDispatch();
    useEffect(()=>{
        if (items.length === 0){
            dispatch(getIngredients());
        }
    }, [dispatch, items])

    const totalPrice = useMemo(() => {
        return orderIngredients.reduce((acc, item) => {
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

OrderItem.propTypes = {
    item: orderPropType.isRequired,
    showStatus: propTypes.bool.isRequired,
}
export default OrderItem;
