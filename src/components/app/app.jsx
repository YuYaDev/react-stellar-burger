import React, { useState, useEffect} from 'react'
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../utils/api";

const api = new Api();

function App() {

    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getIngredients()
            .then((data) => {
                setIngredients(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);


    return (
        <div style={{overflow: 'hidden'}} >

            {loading && <div>Данные загружаются...</div>}
            {error && (
                <div>{`Возникла проблема загрузки данных - ${error}`}</div>
            )}
            {loading === false && ingredients &&
                <div className={styles.app}>
                    <AppHeader/>

                    <main className={styles.main}>
                        <div>
                            <p className="text text_type_main-large pb-5">Соберите бургер</p>
                            <BurgerIngredients ingredients={ingredients}  />
                        </div>
                        <BurgerConstructor ingredients={ingredients} />
                    </main>

                </div>
            }
        </div>
  );
}

export default App;
