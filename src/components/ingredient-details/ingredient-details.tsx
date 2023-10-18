import styles from "../ingredient-details/ingredient-details.module.css";
import {useParams} from "react-router-dom";
import {getIngredients} from "../../services/actions/ingredients";
import {useEffect, useState} from "react";
import {getCurrentIngredient, getIngredientList} from "../../services/selectors/selectors";
import {IIngredient} from "../../services/types/data";
import {useAppDispatch, useAppSelector} from "../../services/types";


const IngredientDetails  = () => {
    let { id } = useParams();
    const [pageView, setPageView] = useState(false);
    const ingredientList = useAppSelector(getIngredientList);
    let currentIngredient = useAppSelector(getCurrentIngredient);

    useEffect(()=>{
        if(JSON.stringify(currentIngredient) === '{}'){
            setPageView(true);
        }else{
            setPageView(false);
        }
    }, [currentIngredient])

    const dispatch = useAppDispatch();
    useEffect(()=>{
        if (ingredientList.length === 0){
            dispatch(getIngredients());
        }
    }, [dispatch, ingredientList])

    if(pageView){
        let ingredient = ingredientList.find((item : IIngredient) => item._id === id);
        if (ingredient)
            currentIngredient = ingredient;
    }

    return (
        <>
            {currentIngredient &&
            <div className={styles.ingredient__container}>
                <p className={pageView ? "text text_type_main-large pt-15" : `${styles.header} text text_type_main-medium` }>
                    Детали ингредиента
                </p>
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
