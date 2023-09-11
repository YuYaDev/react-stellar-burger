import styles from "./burger-constructor.module.css";
import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";

import {addModuleIngredient, deleteModuleIngredient, resetModuleIngredients} from "../../services/actions/burger-constructor";
import {createOrder} from "../../services/actions/order";
import {useDrop} from "react-dnd";
import {useNavigate} from "react-router-dom";

function BurgerConstructor() {
  const dispatch = useDispatch();

  const [modalVisible,setModalVisible] = useState(false);
  const { isAuthenticated } = useSelector(state => state.authentication)
  const navigate = useNavigate();

  const addedItems = useSelector(state => state.addedIngredients);
  const bun = addedItems.bun;
  const fillings = addedItems.ingredients;

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      if (item.type === 'bun' && addedItems.bun !== null) {
        dispatch(deleteModuleIngredient(addedItems.bun));
      }
      dispatch(addModuleIngredient(item));
    }
  });

  const totalPrice = useMemo(() => {
    let bunPrice = 0;
    if (bun !== null) {
      bunPrice = bun.price;
    }

    return fillings.reduce((acc, item) => {
      return acc + item.price;
    }, 0) + bunPrice;
  }, [bun, fillings]);

  const openModal = () => {
    const orderData = fillings.map(item => item._id);

    if (bun !== null) {
      orderData.push(bun._id);
    }

    dispatch(createOrder(orderData));
    setModalVisible(true);
  }

  const closeModal = () => {
    dispatch(resetModuleIngredients());
    setModalVisible(false);
  }

  return (
      <section className={styles.burgerConstructor}>

        <div ref={dropTarget} className={`${styles.burgerConstructor__container} mt-25 pl-4`}>

          {
              bun && <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${bun.name} (верх)`}
                  price={bun.price}
                  thumbnail={bun.image}
                  extraClass="mb-1 ml-8"
              />
          }

          <ul className={`${styles.burgerConstructor__list} custom-scroll`}>
            {
              fillings.map((item, index) => {
                return (
                    <BurgerConstructorItem
                        key={item.key}
                        item={item}
                        index={index}
                        removeItem={deleteModuleIngredient}
                    />
                )
              })
            }
          </ul>

          {
              bun && <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bun.name} (низ)`}
                  price={bun.price}
                  thumbnail={bun.image}
                  extraClass="mt-1 ml-8"
              />
          }

          <div className={`${styles.burgerConstructor__info} mt-9 pr-4`}>
            <div className={`${styles.burgerConstructor__price} mr-10`}>
              <p className="text text_type_digits-medium">{totalPrice}</p>
              <CurrencyIcon type="primary" />
            </div>
            {
              bun === null || fillings.length === 0 ?
                  <Button disabled htmlType="button" type="primary" size="large">
                    Оформить заказ
                  </Button> :
                  <Button onClick={() => {isAuthenticated ? openModal() : navigate('./login')}} htmlType="button" type="primary" size="large">
                    Оформить заказ
                  </Button>
            }
          </div>

        </div>

        <Modal modalActive={modalVisible} closeModal={closeModal}>
          <OrderDetails />
        </Modal>

      </section>
  );
}

export default BurgerConstructor;
