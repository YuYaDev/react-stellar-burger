import { api } from "../../utils/api";

export const GET_MENU_INGREDIENTS_REQUEST = 'GET_MENU_INGREDIENTS_REQUEST';
export const GET_MENU_INGREDIENTS_SUCCESS = 'GET_MENU_INGREDIENTS_SUCCESS';
export const GET_MENU_INGREDIENTS_FAILED = 'GET_MENU_INGREDIENTS_FAILED';

export function getIngredients() {
  return function(dispatch) {
    dispatch({ type: GET_MENU_INGREDIENTS_REQUEST });
    api.getIngredients().then(res => {
      dispatch({
        type: GET_MENU_INGREDIENTS_SUCCESS,
        payload: res.data
      });
    }).catch(() => {
      dispatch({
        type: GET_MENU_INGREDIENTS_FAILED
      });
    });
  };
}