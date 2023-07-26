
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor/burger-constructor.module.css";
import React,  {useMemo, useState, useContext, useReducer} from "react";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {IngredientContext, OrderContext} from "../../utils/contexts";
import Api from "../../utils/api";




const BurgerConstructor = () => {
    const ingredients = useContext(IngredientContext);

    const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
    const fillings = useMemo(() => ingredients.filter(item => item.type !== 'bun'), [ingredients]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    const  handleModalClose = () => {
        setModalVisible(false);
    }

    const handleCreateOrder = () => {
        const api = new Api();

        api.createOrder(orderState.ingredientIDs)
            .then((data) => {
                setModalData(data);
                setModalVisible(true);
            })
            .catch((e) => console.log('Что-то пошло не так. Код ответа сервера:', e))
    }

    const modal = (
        <Modal header='' onClose={handleModalClose}>
            <OrderDetails orderData={modalData}/>
        </Modal>
    );

    const initialOrderState = { totalCount: 0 , ingredientIDs: []};

    function reducer(state, action) {
        switch (action.type) {
            case "add":
                state.ingredientIDs.push(action.ingredientId);
                return {
                    totalCount: state.totalCount + action.price,
                    ingredientIDs: state.ingredientIDs
                };
            case "remove":
                return {
                    totalCount: state.totalCount - action.price,
                    ingredientIDs: state.ingredientIDs.filter(item => item !== action.ingredientId)
                };
            default:
                throw new Error(`Wrong type of action: ${action.type}`);
        }
    }


    const [orderState, orderDispatcher] = useReducer(reducer, initialOrderState, undefined);

    return (
        <div className={`${styles.container} pt-15 pb-4`}>
            <OrderContext.Provider value={{orderState, orderDispatcher}}>
            {isModalVisible && modal}

            <div className="pr-4">
                <BurgerConstructorItem ingredientData={buns[0]} bunType="upBun" />
            </div>

            <div className={`${styles.mainContainer} pr-1 custom-scroll`}>
                {
                    fillings.map((item, index)=>{
                        return <BurgerConstructorItem ingredientData={item} key={index}/>
                    })
                }
            </div>

            <div className="pr-4 pb-1">
                <BurgerConstructorItem ingredientData={buns[1]} bunType="downBun" />
            </div>
            </OrderContext.Provider>

            <div className={`${styles.orderContainer} mt-5 mb-5`}>
                <div className={styles.price}>
                    <p className="text text_type_digits-medium pr-2">{orderState.totalCount}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={handleCreateOrder} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>

        </div>
    );
}



export default BurgerConstructor;
