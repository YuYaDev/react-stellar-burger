import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED
} from "../actions/order";

const initialState = {
    orderId: 0,
    createOrderRequest: false,
    createOrderFailed: false
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST: {
            return {
                ...state,
                createOrderRequest: true
            };
        }
        case CREATE_ORDER_SUCCESS: {
            return {
                ...state,
                createOrderRequest: false,
                createOrderFailed: false,
                orderId: action.payload
            };
        }
        case CREATE_ORDER_FAILED: {
            return {
                ...state,
                createOrderRequest: false,
                createOrderFailed: true,
                orderId: initialState.orderId
            };
        }
        default: {
            return state;
        }
    }
};