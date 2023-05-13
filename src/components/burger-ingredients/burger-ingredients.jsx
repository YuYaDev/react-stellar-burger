import {Counter, Tab, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import burgerIngredStyles from './burger-ingredients.module.css';
import React, { useState } from "react";


const Ingredient = ({ ingrdData }) => {
    return (
        <div className={burgerIngredStyles.ingredientContainer}>
            <Counter count={1} size="default" extraClass="m-1"/>
            <img src={ingrdData.image} alt="Ingredient"/>
            <div className={burgerIngredStyles.price}>
                <p className="text text_type_digits-default pr-2">{ingrdData.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${burgerIngredStyles.nameText}`}>{ingrdData.name}</p>
        </div>
    );
}

const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = React.useState("leaf")
    return (
        <>
        <div style={{ display: 'flex' }}>
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
            <p className="text text_type_main-medium mt-15" id="leaf">Булки</p>
            <div className={burgerIngredStyles.gridWrapper}>
                {   ingredients.map((item, index)=>{
                    if( item.type === 'bun')
                        return <Ingredient ingrdData={item} key={index} />
                })}
            </div>

            <p className="text text_type_main-medium mt-15" id="souce">Соусы</p>
            <div className={burgerIngredStyles.gridWrapper}>
                {   ingredients.map((item, index)=>{
                    if( item.type === 'sauce')
                        return <Ingredient ingrdData={item} key={index} />
                })}
            </div>

            <p className="text text_type_main-medium mt-15" id="filling">Начинки</p>
            <div className={burgerIngredStyles.gridWrapper}>
                {   ingredients.map((item, index)=>{
                    if( item.type === 'main')
                        return <Ingredient ingrdData={item} key={index} />
                })}
            </div>
        </div>
        </>
    );
}

export default BurgerIngredients;