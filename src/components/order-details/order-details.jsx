import styles from "../order-details/order-details.module.css";


const OrderDetails  = () => {
    return (
        <div className={styles.container}>
            <p className={`text text_type_main-default ${styles.nameText}`}>ЗАКАЗ</p>
        </div>
    );
}

export default OrderDetails ;