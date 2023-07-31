import React, { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {

    return (
    <div className={styles.container}>
      <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          <div>
            <p className="text text_type_main-large pb-5">
              Соберите бургер
            </p>
            <BurgerIngredients />
          </div>
           {/*<BurgerConstructor />*/}
        </main>
      </div>
    </div>
  );
}

export default App;
