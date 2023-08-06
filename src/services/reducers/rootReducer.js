import { combineReducers } from 'redux';

import {ingredientsReducer} from "./ingredients";
import {ingredientReducer} from "./ingredient";
import {burgerConstructorReducer} from "./burger-constructor";
import {orderReducer} from "./order";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    currentIngredient: ingredientReducer,
    addedIngredients: burgerConstructorReducer,
    order: orderReducer
});