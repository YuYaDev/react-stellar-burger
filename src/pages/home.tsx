import styles from './basic.module.css'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

function HomePage() {

    return (
        <DndProvider backend={HTML5Backend}>
            <main className={styles.twoColumns}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
    );
}
export default HomePage;
