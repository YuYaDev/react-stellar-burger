import styles from "./order-details.module.css";
import orderConfirm from "../../images/done.svg";
import {getOrderNumber} from "../../services/selectors/selectors";
import {useAppSelector} from "../../services/types";
import { FidgetSpinner } from  'react-loader-spinner'

function OrderDetails() {

    const orderNumber = useAppSelector(getOrderNumber);

    return (
        <div className={`${styles.order__container} pt-30 pb-30`}>
            {orderNumber
                ? <p className="text text_type_digits-large">{orderNumber}</p>
                : <FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    ballColors={['#7A20BC', '#5247F7', '#0000ff']}
                    backgroundColor="white"
                />
            }
            <h2 className="text text_type_main-medium mt-8">идентификатор заказа</h2>
            <img className={`${styles.order__image} mt-15`} src={orderConfirm} alt="заказ принят" />
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

export default OrderDetails;
