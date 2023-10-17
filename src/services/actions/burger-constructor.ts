
import {IIngredient} from "../types/data";
import {
  ADD_MODULE_INGREDIENT,
  DELETE_MODULE_INGREDIENT,
  MOVE_MODULE_INGREDIENT,
  RESET_MODULE_INGREDIENTS
} from "../constants/burger-constructor";


export interface IAddModuleIngredientAction {
  readonly type: typeof ADD_MODULE_INGREDIENT;
  payload: IIngredient
}

export interface IDeleteModuleIngredientAction {
  readonly type: typeof DELETE_MODULE_INGREDIENT;
  payload: IIngredient
}

export interface IMoveModuleIngredientAction {
  readonly type: typeof MOVE_MODULE_INGREDIENT;
  payload: any
}

export interface IResetModuleIngredientAction {
  readonly type: typeof RESET_MODULE_INGREDIENTS;
}

export type TBurgerConstructorActions = IAddModuleIngredientAction |
                                        IDeleteModuleIngredientAction |
                                        IMoveModuleIngredientAction |
                                        IResetModuleIngredientAction;

export const addModuleIngredient = (item: IIngredient): IAddModuleIngredientAction => {
  return {
    type: ADD_MODULE_INGREDIENT,
    payload: item
  };
};

export const deleteModuleIngredient = (item: IIngredient): IDeleteModuleIngredientAction => {
  return {
    type: DELETE_MODULE_INGREDIENT,
    payload: item.key
  };
};

export const moveModuleIngredient = (index: any): IMoveModuleIngredientAction => {
  return {
    type: MOVE_MODULE_INGREDIENT,
    payload: index
  };
};

export const resetModuleIngredients = (): IResetModuleIngredientAction => {
  return {
    type: RESET_MODULE_INGREDIENTS
  };
};
