import styles from "./order-feed.module.css";
import {Link, useLocation} from "react-router-dom";
import OrderItem from "../order-item/order-item";
import propTypes from "prop-types";
import {orderPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientList} from "../../services/selectors/selectors";
import {useEffect} from "react";
import {getIngredients} from "../../services/actions/ingredients";

function OrderFeed(props){
    const location = useLocation();
    const { orders, link, showStatus } = props;
    const items = useSelector(getIngredientList);

    const dispatch = useDispatch();
    useEffect(()=>{
        if (items.length === 0){
            dispatch(getIngredients());
        }
    }, [dispatch, items])

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

OrderFeed.propTypes = {
    orders: PropTypes.arrayOf(orderPropType).isRequired,
    link: propTypes.string.isRequired,
    showStatus: propTypes.bool.isRequired,
}

export default OrderFeed;
