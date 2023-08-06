import styles from "../ingredient-details/ingredient-details.module.css";
import {useSelector} from "react-redux";


const IngredientDetails  = () => {
    const currentIngredient = useSelector(state => state.currentIngredient.currentItem);

    return (
        <>
            {currentIngredient &&
            <div className={styles.ingredient__container}>
                <img className={`${styles.ingredient__image}`} src={currentIngredient.image} alt="Ingredient"/>
                <p className={`text text_type_main-medium mb-4`}>{currentIngredient.name}</p>
                <ul className={styles.nutrition__container}>
                    <li className={styles.nutrition__value}>
                        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.calories}</p>
                    </li>
                    <li className={styles.nutrition__value}>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.proteins}</p>
                    </li>
                    <li className={styles.nutrition__value}>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.fat}</p>
                    </li>
                    <li className={styles.nutrition__value}>
                        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.carbohydrates}</p>
                    </li>
                </ul>
            </div>
            }
        </>
    );
}



export default IngredientDetails ;