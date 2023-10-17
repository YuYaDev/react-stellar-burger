import { api } from "../../utils/api";
import {
  GET_MENU_INGREDIENTS_FAILED,
  GET_MENU_INGREDIENTS_REQUEST,
  GET_MENU_INGREDIENTS_SUCCESS
} from "../constants/ingredients";
import {IIngredient} from "../types/data";
import {TAppDispatch, TAppThunk} from "../types";

// types
export interface IIngredientsRequestAction {
  readonly type: typeof GET_MENU_INGREDIENTS_REQUEST;
}
export interface IIngredientsRequestSuccessAction {
  readonly type: typeof GET_MENU_INGREDIENTS_SUCCESS;
  payload: IIngredient[]
}
export interface IIngredientsRequestFailedAction {
  readonly type: typeof GET_MENU_INGREDIENTS_FAILED;
}

// actions
export const ingredientsRequest = (): IIngredientsRequestAction => {
  return {
    type: GET_MENU_INGREDIENTS_REQUEST,
  }
};
export const ingredientsRequestSuccess = (data: IIngredient[]): IIngredientsRequestSuccessAction => {
  return {
    type: GET_MENU_INGREDIENTS_SUCCESS,
    payload: data
  }
};
export const ingredientsRequestFailed = (): IIngredientsRequestFailedAction => {
  return {
    type: GET_MENU_INGREDIENTS_FAILED,
  }
};

// types union
export type TIngredientsActions = IIngredientsRequestAction | IIngredientsRequestSuccessAction | IIngredientsRequestFailedAction;

// thunk
export const getIngredients: TAppThunk = () => (dispatch) => {
    dispatch(ingredientsRequest);
    api.getIngredients().then(res => {
      dispatch(ingredientsRequestSuccess(res.data));
    }).catch(() => {
      dispatch(ingredientsRequestFailed);
    });
}
