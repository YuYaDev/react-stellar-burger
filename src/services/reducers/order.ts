import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED
} from "../constants/order";
import {TOrderActions} from "../actions/order";

type TOrderState = {
    orderId: number,
    createOrderRequest: boolean,
    createOrderFailed: boolean
};

const initialState: TOrderState = {
    orderId: 0,
    createOrderRequest: false,
    createOrderFailed: false
};

export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {
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
