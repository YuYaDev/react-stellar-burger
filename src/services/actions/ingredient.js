export const SHOW_MENU_INGREDIENT_REQUEST = 'SHOW_MENU_INGREDIENT_REQUEST';
export const HIDE_MENU_INGREDIENT_REQUEST = 'HIDE_MENU_INGREDIENT_REQUEST';

export const showMenuIngredient = (item) => {
  return {
    type: SHOW_MENU_INGREDIENT_REQUEST,
    payload: item
  }
};

export const hideMenuIngredient = () => {
  return {
    type: HIDE_MENU_INGREDIENT_REQUEST
  }
};