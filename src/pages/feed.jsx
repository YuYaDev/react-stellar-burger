import OrderFeed from "../components/order-feed/order-feed";
import FeedStatus from "../components/feed-status/feed-status";
import styles from './basic.module.css'
import {getAllOrdersInfo, getAuthenticationInfo} from "../services/selectors/selectors";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    WS_ALLORDERS_CONNECTION_CLOSED,
    WS_ALLORDERS_CONNECTION_START,
    wsConnectionClosed
} from "../services/actions/ws-all-orders";

function FeedPage() {
    const {orders, total, totalToday } = useSelector(getAllOrdersInfo);
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch({ type: WS_ALLORDERS_CONNECTION_START });
            return () => dispatch({ type: WS_ALLORDERS_CONNECTION_CLOSED });
        },
        [dispatch]
    );

  return (
      <>
      { orders &&
        <main className={styles.twoColumns}>
            <h1 className="text text_type_main-large m-10">Лента заказов</h1>
            <OrderFeed orders={orders} link={'feed'} showStatus={false}/>
            <FeedStatus orders={orders} total={total} totalToday={totalToday} />
        </main>
      }
      </>
);
}
export default FeedPage;
