import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient.module.css';
import {ingredientPropType} from "../../utils/prop-types";

const Ingredient = ({ ingredientData, openModal}) => {
    return (
        <div className={styles.container} onClick={() => openModal(ingredientData)}>
            <Counter count={1} size="default" extraClass="m-1"/>
            <img className="pl-4 pr-4" src={ingredientData.image} alt="Ingredient"/>
            <div className={styles.price}>
                <p className="text text_type_digits-default pr-2">{ingredientData.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${styles.nameText}`}>{ingredientData.name}</p>
        </div>
    );
}

Ingredient.propTypes = {
    ingredientData: ingredientPropType.isRequired
}

export default Ingredient;