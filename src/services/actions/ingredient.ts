import {HIDE_MENU_INGREDIENT_REQUEST, SHOW_MENU_INGREDIENT_REQUEST} from "../constants/ingredient";
import {IIngredient} from "../types/data";

export interface IShowMenuIngredientAction {
  readonly type: typeof SHOW_MENU_INGREDIENT_REQUEST;
  payload: IIngredient
}
export interface IHideMenuIngredientAction {
  readonly type: typeof HIDE_MENU_INGREDIENT_REQUEST;
}

export const showMenuIngredient = (item: IIngredient): IShowMenuIngredientAction => {
  return {
    type: SHOW_MENU_INGREDIENT_REQUEST,
    payload: item
  }
};

export const hideMenuIngredient = (): IHideMenuIngredientAction => {
  return {
    type: HIDE_MENU_INGREDIENT_REQUEST
  }
};

export type TIngredientMenuActions = IShowMenuIngredientAction | IHideMenuIngredientAction;
