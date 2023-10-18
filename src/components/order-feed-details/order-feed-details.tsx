import {useParams} from "react-router-dom";
import styles from './order-feed-details.module.css'
import {
    getAllOrdersInfo,
    getIngredientList, getUserOrdersInfo,
    isAllOrdersConnected,
    isAllOrdersStartConnection, isUserOrdersConnected, isUserOrdersStartConnection
} from "../../services/selectors/selectors";
import {useEffect, useMemo, useState} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {IIngredient, IOrder} from "../../services/types/data";
import {useAppDispatch, useAppSelector} from "../../services/types";
import {wsConnectionClosed, wsConnectionStart} from "../../services/actions/ws-all-orders";
import {wsUserConnectionClosed, wsUserConnectionStart} from "../../services/actions/ws-user-orders";

function countIngredient(ingredient: IIngredient, ingredientList: string[]){
    return ingredientList.filter(item => item === ingredient._id).length
}

function OrderFeedDetails(){
    let { id } = useParams();
    const source = window.location.pathname.includes('feed') ? 'feed' : 'profile';

    const {orders} = useAppSelector(source === 'feed' ? getAllOrdersInfo : getUserOrdersInfo );

    const isConnected = useAppSelector(source === 'feed' ? isAllOrdersConnected : isUserOrdersConnected);
    const isConnectionStarted = useAppSelector(source === 'feed' ? isAllOrdersStartConnection : isUserOrdersStartConnection);

    const [startConnectionInside, setConnectionInside] = useState(false);
    let currentOrder: any  = {}; // IOrder
    let orderIngredients: IIngredient[] = [];

    const items = useAppSelector(getIngredientList);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if (items.length === 0){
            dispatch(getIngredients());
        }
        if(!orders && !isConnected && !isConnectionStarted) {
            if(source === 'feed')
                dispatch(wsConnectionStart());
            else
                dispatch(wsUserConnectionStart());
            setConnectionInside(true)
        }
    }, [dispatch, items, orders, isConnected, isConnectionStarted, source])

    useEffect(()=>{
        return () => {
            if (startConnectionInside && isConnected){
                if(source === 'feed')
                    dispatch(wsConnectionClosed());
                else
                    dispatch(wsUserConnectionClosed());
                setConnectionInside(false)
            }
        }
    }, [dispatch, startConnectionInside, isConnected, source])


    const totalPrice = useMemo(() => {
        return orderIngredients.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    }, [orderIngredients]);

    if (orders)
        currentOrder = orders.find((item: IOrder) => item._id === id);
    if (orders && items)
        orderIngredients = items.filter((ingredient: IIngredient) => currentOrder.ingredients.includes(ingredient._id));

    return(
        <>
            {   orders && items &&
                <div className={`${styles.orderDetails} p-4`}>
                    <p className={'text text_type_digits-default pb-4'}>#{currentOrder.number}</p>
                    <div className={styles.orderDetails__container}>
                        <p className={'text text_type_main-medium pb-1 pt-1'}>{currentOrder.name}</p>
                        <p className={`${styles.orderDetails__status} text text_type_main-small pb-15`}>{currentOrder.status === 'done' ? "Выполнен" : "В работе"}</p>
                        <p className={'text text_type_main-medium pb-4'}>Состав:</p>
                        <div className={`${styles.orderDetails__scroll} custom-scroll`}>
                            <ul className={`${styles.orderDetails__ingredients} pr-4`}>
                                {
                                    orderIngredients.map((item) =>
                                        <li className={styles.orderDetails__info} key={item._id}>
                                            <div className={styles.orderDetails__imgWrap}><img className={styles.orderDetails__img} src={item.image} alt={item.name}/></div>
                                            <p className={'text text_type_main-small'}>{item.name}</p>
                                            <div className={styles.orderDetails__count}>
                                                <p className={'text text_type_digits-default'}>{countIngredient(item,currentOrder.ingredients)} x {item.price}</p>
                                                <CurrencyIcon type="primary" />
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className={`${styles.orderDetails__row} pt-10 pb-10`}>
                            <p className={'text text_type_main-default text_color_inactive'}><FormattedDate date={new Date(currentOrder.createdAt)} /></p>
                            <div className={`${styles.orderDetails__price}`}>
                                <p className="text text_type_digits-default">{totalPrice}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    </div>

                </div>
            }
            </>
    )
}

export default OrderFeedDetails;
