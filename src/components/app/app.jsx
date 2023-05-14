import React, { useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
const URL = 'https://norma.nomoreparties.space/api/ingredients '

function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => setData(data.data))
            .catch(error => console.log(error))
        }, [])

    return (
    <div className={styles.app}>
        <AppHeader />

        <main className={styles.main}>
            <div>
                <p className="text text_type_main-large pb-5">Соберите бургер</p>
                <BurgerIngredients ingredients={data}/>
            </div>
            <BurgerConstructor ingredients={data}/>
        </main>

    </div>
  );
}

export default App;
