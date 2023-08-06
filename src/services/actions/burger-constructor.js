// export const ADD_MODULE_INGREDIENT = 'ADD_MODULE_INGREDIENT';
// export const DELETE_MODULE_INGREDIENT = 'DELETE_MODULE_INGREDIENT';
// export const MOVE_MODULE_INGREDIENT = 'MOVE_MODULE_INGREDIENT';
// export const RESET_MODULE_INGREDIENTS = 'RESET_MODULE_INGREDIENTS';


export const ADD_MODULE_INGREDIENT = 'ADD_MODULE_INGREDIENT';
export const DELETE_MODULE_INGREDIENT = 'DELETE_MODULE_INGREDIENT';
export const MOVE_MODULE_INGREDIENT = 'MOVE_MODULE_INGREDIENT';
export const RESET_MODULE_INGREDIENTS = 'RESET_MODULE_INGREDIENTS';

export const addModuleIngredient = (item) => {
  return {
    type: ADD_MODULE_INGREDIENT,
    payload: item
  };
};

export const deleteModuleIngredient = (item) => {
  return {
    type: DELETE_MODULE_INGREDIENT,
    payload: item.key
  };
};

export const moveModuleIngredient = (index) => {
  return {
    type: MOVE_MODULE_INGREDIENT,
    payload: index
  };
};

export const resetModuleIngredients = () => {
  return {
    type: RESET_MODULE_INGREDIENTS
  };
};