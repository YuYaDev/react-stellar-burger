import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerIngredStyles from './burger-ingredients.module.css';
import React from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";
import Ingredient from "../ingredient/ingredient";

const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = React.useState("leaf")
    return (
        <>
        <div style={{ display: 'flex' }} className="mb-5">
            <a href="#leaf">
                <Tab value="leaf" active={current === 'leaf'} onClick={setCurrent}>Булки</Tab>
            </a>
            <a href="#souce">
                <Tab value="souce" active={current === 'souce'} onClick={setCurrent}>Соусы</Tab>
            </a>
            <a href="#filling">
                <Tab value="filling" active={current === 'filling'} onClick={setCurrent}>Начинки</Tab>
            </a>
        </div>

        <div className={`${burgerIngredStyles.container} custom-scroll`}>
            <p className="text text_type_main-medium pt-5 pb-2" id="leaf">Булки</p>
            <div className={`${burgerIngredStyles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
                {
                    ingredients.filter(item => item.type === 'bun').map((item, index)=>{
                        return <Ingredient ingredientData={item} key={index} />
                    })
                }
            </div>

            <p className="text text_type_main-medium pt-5 pb-2" id="souce">Соусы</p>
            <div className={`${burgerIngredStyles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
                {
                    ingredients.filter(item => item.type === 'sauce').map((item, index)=>{
                        return <Ingredient ingredientData={item} key={index} />
                    })
                }
            </div>

            <p className="text text_type_main-medium pt-5 pb-2" id="filling">Начинки</p>
            <div className={`${burgerIngredStyles.gridWrapper} mb-5 ml-4 mr-4 mt-4`}>
                {
                    ingredients.filter(item => item.type === 'main').map((item, index)=>{
                        return <Ingredient ingredientData={item} key={index} />
                    })
                }
            </div>
        </div>
        </>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
}

export default BurgerIngredients;