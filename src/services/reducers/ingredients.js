import {GET_MENU_INGREDIENTS, GET_MENU_INGREDIENTS_FAILED, GET_MENU_INGREDIENTS_SUCCESS} from "../actions/ingredients";

// Исходное состояние
const initialState =
    [{
        // ingredientsMenu: {
        //     ingredientsRequest: false,
        //     ingredientsFailed: false,
        //     ingredientList: []
        // },
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientList: [],
        orderIngredientList: [],
        currentIngredient: {
            _id: null,
            name: '',
            type: '',
            proteins: null,
            fat: null,
            carbohydrates: null,
            calories: null,
            price: null,
            image: '',
        },
        currentOrder: {
            success: false,
            name: '',
            order: {
                number: null,
            },
        }
    }]

export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_INGREDIENTS: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
            };
        }
        case GET_MENU_INGREDIENTS_SUCCESS: {
            console.log("receive dispatch")
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