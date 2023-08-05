// export const ADD_MODULE_INGREDIENT = 'ADD_MODULE_INGREDIENT';
// export const DELETE_MODULE_INGREDIENT = 'DELETE_MODULE_INGREDIENT';
// export const MOVE_MODULE_INGREDIENT = 'MOVE_MODULE_INGREDIENT';
// export const RESET_MODULE_INGREDIENTS = 'RESET_MODULE_INGREDIENTS';
//
// export const addModuleIngredient = (item) => {
//   return {
//     type: ADD_MODULE_INGREDIENT,
//     payload: item
//   };
// };
//
// export const deleteModuleIngredient = (item) => {
//   return {
//     type: DELETE_MODULE_INGREDIENT,
//     payload: item.key
//   };
// };
//
// export const moveModuleIngredient = (index) => {
//   return {
//     type: MOVE_MODULE_INGREDIENT,
//     payload: index
//   };
// };
//
// export const resetModuleIngredients = () => {
//   return {
//     type: RESET_MODULE_INGREDIENTS
//   };
// };

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const MOVE_ITEM = 'MOVE_ITEM';
export const RESET_ITEMS = 'RESET_ITEMS';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item.key
  };
};

export const moveItem = (index) => {
  return {
    type: MOVE_ITEM,
    payload: index
  };
};

export const resetItems = () => {
  return {
    type: RESET_ITEMS
  };
};