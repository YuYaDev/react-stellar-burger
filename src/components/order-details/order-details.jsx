import styles from "../order-details/order-details.module.css";
import doneImage from "../../images/done.svg"
import {orderPropType} from "../../utils/prop-types";

const OrderDetails  = ({orderData}) => {
    return (
        <div className={styles.container}>
            <p className={`text text_type_digits-large `}>{orderData.order.number}</p>
            <p className={`text text_type_main-medium`}>идентификатор заказа</p>
            <img className={`pt-15 pb-15`} src={doneImage} alt="Done" />
            <p className={`text text_type_main-default`}>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive pb-15`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

OrderDetails.propTypes = {
    orderData: orderPropType.isRequired
}

export default OrderDetails ;