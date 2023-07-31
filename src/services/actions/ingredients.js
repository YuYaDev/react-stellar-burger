// BurgerIngredients

import { api } from "../../utils/api";

export const GET_MENU_INGREDIENTS = "GET_MENU_INGREDIENTS";
export const GET_MENU_INGREDIENTS_FAILED = "GET_MENU_INGREDIENTS_FAILED";
export const GET_MENU_INGREDIENTS_SUCCESS = "GET_MENU_INGREDIENTS_SUCCESS";

export function getMenuIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_MENU_INGREDIENTS,
    });
    api
      .getIngredients()
      .then((res) => {
        dispatch({
          type: GET_MENU_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_MENU_INGREDIENTS_FAILED,
        });
      });
  };
}
