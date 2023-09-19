export const getIngredientList = state => state.ingredients.items;
export const getCurrentIngredient = state => state.currentIngredient.currentItem
export const getAuthenticationInfo = state => state.authentication;
export const getAddedIngredient = state => state.addedIngredients;
export const getOrderNumber = state => state.order.orderId;
export const getOrderInfo = state => state.order;
export const getAllOrdersInfo = state => state.allOrders.messages;
export const getUserOrdersInfo = state => state.userOrders.messages;

