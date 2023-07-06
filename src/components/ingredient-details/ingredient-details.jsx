import styles from "../ingredient-details/ingredient-details.module.css";
import PropTypes from "prop-types";


const IngredientDetails  = ({ ingredientData }) => {
    return (
        <div className={styles.container}>
            <img className={`${styles.image}`} src={ingredientData.image} alt="Ingredient"/>
            <p className={`text text_type_main-medium mb-4 ${styles.nameText}`}>{ingredientData.name}</p>
            <ul className={styles.nutritionContainer}>
                <li className={styles.nutritionValue}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_main-default text_color_inactive">{ingredientData.calories}</p>
                </li>
                <li className={styles.nutritionValue}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_main-default text_color_inactive">{ingredientData.proteins}</p>
                </li>
                <li className={styles.nutritionValue}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_main-default text_color_inactive">{ingredientData.fat}</p>
                </li>
                <li className={styles.nutritionValue}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_main-default text_color_inactive">{ingredientData.carbohydrates}</p>
                </li>
            </ul>
        </div>
    );
}

IngredientDetails.propTypes = {
    // ingredientPropType или undefined в случае инициализации modalData в BurgerIngredients
    ingredientData: PropTypes.any.isRequired
}


export default IngredientDetails ;