import {
  GET_MENU_INGREDIENTS,
  GET_MENU_INGREDIENTS_FAILED,
  GET_MENU_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";

// Исходное состояние
const initialState = {
  ingredientsMenu: {
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredientList: []
  },
  orderIngredientList: [],
  currentIngredient: null,
  currentOrder: null,
};


export const ingredientReducer = (state = initialState.ingredientsMenu, action) => {
  switch (action.type) {
    case GET_MENU_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case GET_MENU_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientList: action.ingredients,
        ingredientsRequest: false,
      };
    }
    case GET_MENU_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
