import OrderFeed from "../components/order-feed/order-feed";
import FeedStatus from "../components/feed-status/feed-status";
import styles from './basic.module.css'
import {getAllOrdersInfo} from "../services/selectors/selectors";
import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../services/types";
import {wsConnectionClosed, wsConnectionStart} from "../services/actions/ws-all-orders";

export const FeedPage : FC = () => {
    const {orders, total, totalToday } = useAppSelector(getAllOrdersInfo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart);

        return (() => {
            dispatch(wsConnectionClosed)

        })
    }, [dispatch])

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
