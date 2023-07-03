import styles from "../ingredient-details/ingredient-details.module.css";


const IngredientDetails  = ({ ingredientData }) => {
    return (
        <div className={styles.container}>
            <img className="pl-4 pr-4" src={ingredientData.image} alt="Ingredient"/>
            <p className={`text text_type_main-default ${styles.nameText}`}>{ingredientData.name}</p>
            <p className={`text text_type_main-default ${styles.nameText}`}>{ingredientData.description}</p>
        </div>
    );
}

/*IngredientDetails .propTypes = {
    ingredientData: ingredientPropType.isRequired
}*/

export default IngredientDetails ;