import styles from "../burger-constructor-item/burger-constructor-item.module.css";
import {CurrencyIcon, DeleteIcon, DragIcon, LockIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext, useEffect} from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";
import {OrderContext} from "../../utils/contexts";

function getBunStyle(bunType) {
    if( bunType === "mainBun"){
        return styles.mainBunBorder;
    } else if(bunType === "upBun") {
        return styles.upBunBorder;
    }else {
        return styles.downBunBorder;
    }
}

const BurgerConstructorItem = ({ ingredientData, bunType = "mainBun"}) => {

    const {orderDispatcher} = useContext(OrderContext);
    useEffect(() => {
        orderDispatcher({type: 'add', price: ingredientData.price, ingredientId: ingredientData._id});
    }, [ingredientData, orderDispatcher]);


    return (
        <div className={`${styles.position}`}>
            { bunType === "mainBun" ?  <DragIcon type="primary" /> : <div></div>}

            <div className={`${styles.ingredient} pr-5 pl-2 pt-4 pb-4 ${getBunStyle(bunType)}`}>

                <img className={styles.ingredientImage} src={ingredientData.image} alt="ingredient"/>
                <p className={`text text_type_main-default`}>{ingredientData.name}</p>
                <div className={styles.price}>
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