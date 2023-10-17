import { combineReducers } from 'redux';

import {ingredientsReducer} from "./ingredients";
import {ingredientReducer} from "./ingredient";
import {burgerConstructorReducer} from "./burger-constructor";
import {orderReducer} from "./order";
import {authReducer} from "./auth";
import {wsAllOrdersReducer} from "./ws-all-orders";
import {wsUserOrdersReducer} from "./ws-user-orders";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    currentIngredient: ingredientReducer,
    addedIngredients: burgerConstructorReducer,
    order: orderReducer,
    authentication: authReducer,
    allOrders: wsAllOrdersReducer,
    userOrders: wsUserOrdersReducer
});
