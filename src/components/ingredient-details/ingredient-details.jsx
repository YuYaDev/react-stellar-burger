import styles from "../ingredient-details/ingredient-details.module.css";
import {useSelector} from "react-redux";


const IngredientDetails  = () => {
    const { currentIngredient }  = useSelector((store) => store.currentIngredient);

    return (
        <>
            {currentIngredient &&
            <div className={styles.container}>
                <img className={`${styles.image}`} src={currentIngredient.image} alt="Ingredient"/>
                <p className={`text text_type_main-medium mb-4 ${styles.nameText}`}>{currentIngredient.name}</p>
                <ul className={styles.nutritionContainer}>
                    <li className={styles.nutritionValue}>
                        <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.calories}</p>
                    </li>
                    <li className={styles.nutritionValue}>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.proteins}</p>
                    </li>
                    <li className={styles.nutritionValue}>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{currentIngredient.fat}</p>
                    </li>
                    <li className={styles.nutritionValue}>
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