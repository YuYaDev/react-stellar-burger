import {
  GET_MENU_INGREDIENTS_REQUEST,
  GET_MENU_INGREDIENTS_SUCCESS,
  GET_MENU_INGREDIENTS_FAILED
} from "../actions/ingredients";

const initialState = {
  items: [],
  getMenuIngredientsRequest: false,
  getMenuIngredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_INGREDIENTS_REQUEST: {
      return {
        ...state,
        getMenuIngredientsRequest: true
      };
    }
    case GET_MENU_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        getMenuIngredientsRequest: false,
        getMenuIngredientsFailed: false,
        items: action.payload
      };
    }
    case GET_MENU_INGREDIENTS_FAILED: {
      return {
        ...state,
        getMenuIngredientsRequest: false,
        getMenuIngredientsFailed: true,
        items: initialState.items
      };
    }
    default: {
      return state;
    }
  }
};
