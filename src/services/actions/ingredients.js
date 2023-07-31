// BurgerIngredients
import {api} from "../../components/app/app";


export const GET_MENU_INGREDIENTS = 'GET_MENU_INGREDIENTS_SUCCESS';
export const GET_MENU_INGREDIENTS_FAILED = 'GET_MENU_INGREDIENTS_FAILED';
export const GET_MENU_INGREDIENTS_SUCCESS = 'GET_MENU_INGREDIENTS_SUCCESS';


export function getMenuIngredients() {

    return function(dispatch) {
        dispatch({
            type: GET_MENU_INGREDIENTS
        })
        api.getIngredients()
            .then((res) => {
                console.log("sent dispatch")
                dispatch({
                    type: GET_MENU_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_MENU_INGREDIENTS_FAILED
                })
            })
    }
}