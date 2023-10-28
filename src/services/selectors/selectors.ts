import {TAppState} from "../types";

export const getIngredientList = (state : TAppState) => state.ingredients.items;
export const getCurrentIngredient = (state : TAppState) => state.currentIngredient.currentItem
export const getAuthenticationInfo = (state : TAppState) => state.authentication;
export const getAddedIngredient = (state : TAppState) => state.addedIngredients;
export const getOrderNumber = (state : TAppState) => state.order.orderId;
export const getAllOrdersInfo = (state : TAppState) => state.allOrders.messages;
export const isAllOrdersConnected = (state : TAppState) => state.allOrders.wsConnected;
export const isAllOrdersStartConnection = (state : TAppState) => state.allOrders.setConnection;
export const getUserOrdersInfo = (state : TAppState) => state.userOrders.messages;
export const isUserOrdersConnected = (state : TAppState) => state.userOrders.wsConnected;
export const isUserOrdersStartConnection = ((state : TAppState) => state.userOrders.setConnection);
