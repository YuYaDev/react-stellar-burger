import burgerConstructorItemStyles from "../burger-constructor-item/burger-constructor-item.module.css";
import {CurrencyIcon, DeleteIcon, DragIcon, LockIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

function getBunStyle(bunType) {
    if( bunType === "mainBun"){
        return burgerConstructorItemStyles.mainBunBorder;
    } else if(bunType === "upBun") {
        return burgerConstructorItemStyles.upBunBorder;
    }else {
        return burgerConstructorItemStyles.downBunBorder;
    }
}

const BurgerConstructorItem = ({ ingredientData, bunType = "mainBun"}) => {

    return (
        <div className={`${burgerConstructorItemStyles.position}`}>
            { bunType === "mainBun" ?  <DragIcon type="primary" /> : <div></div>}

            <div className={`${burgerConstructorItemStyles.ingredient} pr-5 pl-2 pt-4 pb-4 ${getBunStyle(bunType)}`}>

                <img className={burgerConstructorItemStyles.ingredientImage} src={ingredientData.image} alt="ingredient"/>
                <p className={`text text_type_main-default`}>{ingredientData.name}</p>
                <div className={burgerConstructorItemStyles.price}>
                    <p className="text text_type_digits-default pr-2">{ingredientData.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                {(bunType !== "mainBun") && <LockIcon type="primary" />}
                {(bunType === "mainBun") && <DeleteIcon type="primary" />}
            </div>
        </div>
    );
};

BurgerConstructorItem.propTypes = {
    ingredientData: ingredientPropType.isRequired,
    bunType: PropTypes.string
}

export default BurgerConstructorItem;