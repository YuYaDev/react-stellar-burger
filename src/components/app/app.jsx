import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import React from "react";
import headerStyles from "../app-header/app-header.module.css";


function App() {
  return (
    <div className={styles.app}>
        <AppHeader />

        <main className={styles.main}>
            <div>
                <p className="text text_type_main-large pb-5">Соберите бургер</p>
                <BurgerIngredients ingredients={data}/>
            </div>

        </main>

    </div>
  );
}

export default App;
