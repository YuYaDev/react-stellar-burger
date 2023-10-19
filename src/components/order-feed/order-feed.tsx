import styles from "./order-feed.module.css";
import {Link, useLocation} from "react-router-dom";
import OrderItem from "../order-item/order-item";
import {getIngredientList} from "../../services/selectors/selectors";
import {FC, useEffect} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import {IOrder} from "../../services/types/data";
import {useAppDispatch, useAppSelector} from "../../services/types";

interface IOrderFeed {
    orders: IOrder[];
    link: string,
    showStatus: boolean,
}
const OrderFeed: FC<IOrderFeed> = ({ orders, link, showStatus }) =>{
    const location = useLocation();
    const items = useAppSelector(getIngredientList);

    return (
        <section className={styles.orderFeed}>
            <div className={`${styles.orderFeed__orders} custom-scroll`}>
                <ul className={`${styles.orderFeed__feed} mr-2`}>
                    {orders.map(item =>
                        <Link
                            className={styles.link}
                            key={item._id}
                            to={`/${link}/${item._id}`}
                            state={{ backgroundLocation: location }}
                        >
                            <OrderItem key={item._id} item={item} showStatus={showStatus}/>
                        </Link>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default OrderFeed;
