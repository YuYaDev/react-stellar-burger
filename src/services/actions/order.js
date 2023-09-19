import { api } from "../../utils/api";

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export function createOrder(orderData, token) {
    return function(dispatch) {
        dispatch({ type: CREATE_ORDER_REQUEST });
        api.createOrder(orderData, token).then(res => {
            dispatch({
                type: CREATE_ORDER_SUCCESS,
                payload: res.order.number
            });
        }).catch(() => {
            dispatch({
                type: CREATE_ORDER_FAILED
            });
        });
    };
}
