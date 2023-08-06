import {
  ADD_MODULE_INGREDIENT,
  DELETE_MODULE_INGREDIENT,
  MOVE_MODULE_INGREDIENT,
  RESET_MODULE_INGREDIENTS
} from "../actions/burger-constructor";

const initialState = {
  bun: null,
  ingredients: []
}

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODULE_INGREDIENT: {
      if (action.payload.type === 'bun') {
        return {
          ...state,
          bun: action.payload
        };
      }

      return {
        ...state,
        ingredients: [ ...state.ingredients, action.payload ]
      };
    }
    case DELETE_MODULE_INGREDIENT: {
      if (action.payload.type === 'bun') {
        return {
          ...state,
          bun: initialState.bun
        };
      }

      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.key !== action.payload)
      };
    }
    case MOVE_MODULE_INGREDIENT: {
      const newItems = [...state.ingredients];
      const dragItem = newItems[action.payload.dragIndex];
      newItems.splice(action.payload.dragIndex, 1);
      newItems.splice(action.payload.hoverIndex, 0, dragItem);
      return {
        ...state,
        ingredients: newItems
      };
    }
    case RESET_MODULE_INGREDIENTS: {
      return {
        ...state,
        bun: initialState.bun,
        ingredients: initialState.ingredients
      };
    }
    default: {
      return state;
    }
  }
};