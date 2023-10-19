import styles from "./feed-status.module.css";
import {IOrder} from "../../services/types/data";
import {FC} from "react";

interface IFeedStatus {
    orders: IOrder[];
    total: number;
    totalToday: number;
}
const FeedStatus: FC<IFeedStatus> = ({orders, total, totalToday}) => {
    const doneOrders = orders ? orders.filter(item => item.status === 'done') : []
    const pendingOrders = orders ? orders.filter(item => item.status !== 'done') : []
    return (
        <section className={`${styles.feedStatus} pl-15`}>
            <div className={`${styles.feedStatus__orders} pb-15`}>
                <div className={styles.feedStatus__status}>
                    <p className="text text_type_main-medium pb-4">Готовы:</p>
                    <ul className={styles.feedStatus__orderNumbers}>
                        {
                            doneOrders.map((item => <li key={item._id}><p className="text text_type_digits-default pb-2">{item.number}</p></li>))
                        }
                    </ul>
                </div>
                <div className={styles.feedStatus__status}>
                    <p className="text text_type_main-medium pb-4">В работе:</p>
                    <ul className={styles.feedStatus__orderNumbers}>
                        {
                            pendingOrders.map((item => <li key={item._id}><p className="text text_type_digits-default pb-2">{item.number}</p></li>))
                        }
                    </ul>
                </div>
            </div>
            <div className="pb-15">
                <p className="text text_type_main-medium">Выполнено за все время:</p>
                <p className="text text_type_digits-large">{total}</p>
            </div>
            <div>
                <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                <p className="text text_type_digits-large">{totalToday}</p>
            </div>
        </section>
    );
}

export default FeedStatus;
