
import {Button, CurrencyIcon, DeleteIcon, LockIcon, DragIcon  } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "../burger-constructor/burger-constructor.module.css";
import React from "react";

const Position = ({ ingrdData, bunType = "mainBun"}) => {

    const backgroundType = bunType === "mainBun" ? {borderRadius: "40px"}
        : bunType === "upBun" ? {borderRadius: "88px 88px 40px 40px"} : {borderRadius: "40px 40px 88px 88px"}

    return (
        <div className={`${burgerConstructorStyles.position}`}>
            {(bunType === "mainBun") && <DragIcon type="primary" /> || <div></div>}

            <div className={`${burgerConstructorStyles.ingredient} pr-5 pl-2 pt-4 pb-4`} style={backgroundType}>
                <img className={burgerConstructorStyles.ingrdImage} src={ingrdData.image} alt="ingredient"/>
                <p className={`text text_type_main-default`}>{ingrdData.name}</p>
                <div className={burgerConstructorStyles.price}>
                    <p className="text text_type_digits-default pr-2">{ingrdData.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                {(bunType !== "mainBun") && <LockIcon type="primary" />}
                {(bunType === "mainBun") && <DeleteIcon type="primary" />}
            </div>
        </div>
    );
};


const BurgerConstructor = ({ ingredients }) => {

    function isBun(ingredient) {
        return ingredient.type === "bun";
    }
    const buns = ingredients.filter(isBun);

    return (
        <div className={`${burgerConstructorStyles.container} pt-15 pb-4`}>
            <div className="pr-4">
                <Position ingrdData={buns[0]} bunType="upBun" />
            </div>

            <div className={`${burgerConstructorStyles.mainContainer} pr-1 custom-scroll`}>
                {
                    ingredients.map((item, index) => {
                        if (item.type !== "bun")
                            return <Position ingrdData={item} key={index}/>
                    })
                }
            </div>
            <div className="pr-4 pb-1">
                <Position ingrdData={buns[1]} bunType="downBun" />
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


export default BurgerConstructor;