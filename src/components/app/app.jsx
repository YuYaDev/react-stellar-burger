import React, { useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../utils/api";
import {IngredientContext} from "../../utils/contexts";
import { useSelector, useDispatch } from 'react-redux';
import {getMenuIngredients} from "../../services/actions/ingredients";


export const api = new Api();

function App() {

    const { ingredientsRequest, ingredientsFailed, ingredientList } = useSelector(store => store.ingredients);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getMenuIngredients());
    }, [])


    return(
   <>
       {ingredientsRequest && <p>Загрузка...</p>}
       {ingredientsRequest === false && ingredientsFailed && <p>Произошла ошибка при получении данных</p>}
       {ingredientsRequest === false && ingredientList &&
           <div className={styles.container} >
               <div className={styles.app}>
                   <AppHeader/>
                   <main className={styles.main}>
                       <IngredientContext.Provider value={ingredientList}>
                           <div>
                               <p className="text text_type_main-large pb-5">Соберите бургер</p>
                               <BurgerIngredients />
                           </div>
                           <BurgerConstructor />
                       </IngredientContext.Provider>
                   </main>
               </div>
           </div>
       }
   </> );
}

export default App;
