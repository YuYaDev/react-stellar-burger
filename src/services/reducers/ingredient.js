import {
  SHOW_MENU_INGREDIENT_REQUEST,
  HIDE_MENU_INGREDIENT_REQUEST
} from "../actions/ingredient";

const initialState = {
  currentItem: {}
}

export const ingredientReducer = (state = initialState, action) => {
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