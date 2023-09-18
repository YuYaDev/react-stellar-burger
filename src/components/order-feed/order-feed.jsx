import styles from "./order-feed.module.css";
import {Link, useLocation} from "react-router-dom";
import OrderItem from "../order-item/order-item";
import propTypes from "prop-types";
import {orderPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

function OrderFeed(props){
    const location = useLocation();
    const { orders, link, showStatus } = props;

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
