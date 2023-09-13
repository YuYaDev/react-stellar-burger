import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "../services/reducers/rootReducer";

export const store = configureStore({
    reducer: rootReducer
});

export const getIngredientList = state => state.ingredients.items;
export const getCurrentIngredient = state => state.currentIngredient.currentItem
export const getAuthenticationInfo = state => state.authentication;
export const getAddedIngredient = state => state.addedIngredients;
export const getOrderNumber = state => state.order.orderId;
