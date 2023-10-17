import {
  SHOW_MENU_INGREDIENT_REQUEST,
  HIDE_MENU_INGREDIENT_REQUEST
} from "../constants/ingredient";
import {IIngredient} from "../types/data";
import {TIngredientMenuActions} from "../actions/ingredient";

type TIngredientState = {
  currentItem: IIngredient | {};
}
const initialState: TIngredientState = {
  currentItem: {}
}

export const ingredientReducer = (state = initialState, action: TIngredientMenuActions): TIngredientState  => {
  switch (action.type) {
    case SHOW_MENU_INGREDIENT_REQUEST: {
      return { ...state, currentItem: action.payload };
    }
    case HIDE_MENU_INGREDIENT_REQUEST: {
      return { ...state, currentItem: initialState.currentItem };
    }
    default: {
      return state;
    }
  }
};
