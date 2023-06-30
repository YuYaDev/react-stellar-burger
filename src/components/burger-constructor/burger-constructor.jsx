
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor/burger-constructor.module.css";
import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";


const BurgerConstructor = ({ ingredients }) => {

    const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
    const fillings = useMemo(() => ingredients.filter(item => item.type !== 'bun'), [ingredients]);

    return (
        <div className={`${styles.container} pt-15 pb-4`}>
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

            <div className={`${styles.orderContainer} mt-5 mb-5`}>
                <div className={styles.price}>
                    <p className="text text_type_digits-medium pr-2">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
}

export default BurgerConstructor;
