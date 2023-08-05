// import {
//   GET_MENU_INGREDIENTS_REQUEST,
//   GET_MENU_INGREDIENTS_SUCCESS,
//   GET_MENU_INGREDIENTS_FAILED
// } from "../actions/ingredients";
//
// const initialState = {
//   ingredients: [],
//   getMenuIngredientsRequest: false,
//   getMenuIngredientsFailed: false,
// };
//
// export const menuIngredientsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_MENU_INGREDIENTS_REQUEST: {
//       return {
//         ...state,
//         getMenuIngredientsRequest: true
//       };
//     }
//     case GET_MENU_INGREDIENTS_SUCCESS: {
//       return {
//         ...state,
//         getMenuIngredientsRequest: false,
//         getMenuIngredientsFailed: false,
//         items: action.payload
//       };
//     }
//     case GET_MENU_INGREDIENTS_FAILED: {
//       return {
//         ...state,
//         getMenuIngredientsRequest: false,
//         getMenuIngredientsFailed: true,
//         items: initialState.ingredients
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };


import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED
} from "../actions/ingredients";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsRequest: false,
        itemsFailed: false,
        items: action.payload
      };
    }
    case GET_ITEMS_FAILED: {
      return {
        ...state,
        itemsRequest: false,
        itemsFailed: true,
        items: initialState.items
      };
    }
    default: {
      return state;
    }
  }
};
