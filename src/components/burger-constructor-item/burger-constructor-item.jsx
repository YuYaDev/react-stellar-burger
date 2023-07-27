import styles from "../burger-constructor-item/burger-constructor-item.module.css";
import {
    ConstructorElement,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext, useEffect} from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";
import {OrderContext} from "../../utils/contexts";

const BurgerConstructorItem = ({ ingredientData, bunType = "mainBun"}) => {

    const {orderDispatcher} = useContext(OrderContext);
    useEffect(() => {
        orderDispatcher({type: 'add', price: ingredientData.price, ingredientId: ingredientData._id});
    }, [ingredientData, orderDispatcher]);


    return (
        <div className={`${styles.position}`}>
            { bunType === "mainBun" ?  <DragIcon type="primary" /> : <div></div>}

            { bunType === "upBun" &&
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${ingredientData.name} (верх)`}
                    price={ingredientData.price}
                    thumbnail={ingredientData.image}
                />
            }
            { bunType === "mainBun" &&
                <ConstructorElement
                    text={ingredientData.name}
                    price={ingredientData.price}
                    thumbnail={ingredientData.image}
                />
            }
            { bunType === "downBun" &&
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${ingredientData.name} (низ)`}
                    price={ingredientData.price}
                    thumbnail={ingredientData.image}
                />
            }

        </div>
    );
};

BurgerConstructorItem.propTypes = {
    ingredientData: ingredientPropType.isRequired,
    bunType: PropTypes.string
}

export default BurgerConstructorItem;