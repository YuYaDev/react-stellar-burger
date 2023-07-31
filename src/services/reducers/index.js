import { combineReducers } from 'redux';
import {
    DELETE_MODULE_INGREDIENT,
    GET_CONSTRUCTOR_INGREDIENTS, GET_ORDER_NUMBER,
    SET_MODULE_INGREDIENT, UPDATE_ORDER_NUMBER
} from "../actions";
import {ingredientReducer, modalIngredientReducer, modalOrderReducer} from "./ingredients";



export const rootReducer = combineReducers({
    ingredients: ingredientReducer,
    currentIngredient: modalIngredientReducer,
    order: modalOrderReducer,
})