import {
  GET_MENU_INGREDIENTS,
  GET_MENU_INGREDIENTS_FAILED,
  GET_MENU_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";
import {DELETE_MODULE_INGREDIENT, GET_ORDER_NUMBER, SET_MODULE_INGREDIENT, UPDATE_ORDER_NUMBER} from "../actions";

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

export const modalIngredientReducer = (state = initialState.currentIngredient, action) => {
  switch (action.type) {
    case SET_MODULE_INGREDIENT: {
      return {
        ...state,
        currentIngredient: {
          name: action.data.name,
          image: action.data.image,
          calories: action.data.calories,
          proteins: action.data.proteins,
          fat: action.data.fat,
          carbohydrates: action.data.carbohydrates
        }
      };
    }
    case DELETE_MODULE_INGREDIENT: {
      return {
        ...state,
        currentIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const modalOrderReducer = (state = initialState.currentOrder, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBER: {
      return {
        ...state,
        currentOrder: {
          name: action.data.name,
          number: action.data.order.number,
        }
      }
    }
    case UPDATE_ORDER_NUMBER: {
      return {
        ...state
      }
    }
    default:
      {
        return state;
      }
    }
};
