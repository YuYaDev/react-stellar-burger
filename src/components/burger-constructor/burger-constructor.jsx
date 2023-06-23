
import {Button, CurrencyIcon, DeleteIcon, LockIcon, DragIcon  } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "../burger-constructor/burger-constructor.module.css";
import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

const Position = ({ ingredientData, bunType = "mainBun"}) => {

    return (
        <div className={`${burgerConstructorStyles.position}`}>
            { bunType === "mainBun" ?  <DragIcon type="primary" /> : <div></div>}

            <div className={`${burgerConstructorStyles.ingredient} pr-5 pl-2 pt-4 pb-4 ${bunType === "mainBun" ? burgerConstructorStyles.mainBunBorder
                : bunType === "upBun" ? burgerConstructorStyles.upBunBorder : burgerConstructorStyles.downBunBorder }`}>

                <img className={burgerConstructorStyles.ingredientImage} src={ingredientData.image} alt="ingredient"/>
                <p className={`text text_type_main-default`}>{ingredientData.name}</p>
                <div className={burgerConstructorStyles.price}>
                    <p className="text text_type_digits-default pr-2">{ingredientData.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                {(bunType !== "mainBun") && <LockIcon type="primary" />}
                {(bunType === "mainBun") && <DeleteIcon type="primary" />}
            </div>
        </div>
    );
};

const BurgerConstructor = ({ ingredients }) => {

    const buns = useMemo(() => ingredients.filter(isBun), [ingredients]);

    return (
        buns.length >= 2 &&
        <div className={`${burgerConstructorStyles.container} pt-15 pb-4`}>
            <div className="pr-4">
                <Position ingredientData={buns[0]} bunType="upBun" />
            </div>

            <div className={`${burgerConstructorStyles.mainContainer} pr-1 custom-scroll`}>
                {
                    ingredients.map((item, index) => {
                        if (item.type !== "bun")
                            return <Position ingredientData={item} key={index}/>
                    })
                }
            </div>
            <div className="pr-4 pb-1">
                <Position ingredientData={buns[1]} bunType="downBun" />
            </div>

            <div className={`${burgerConstructorStyles.orderContainer} mt-5 mb-5`}>
                <div className={burgerConstructorStyles.price}>
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

function isBun(ingredient) {
    return ingredient.type === "bun";
}

export default BurgerConstructor;
