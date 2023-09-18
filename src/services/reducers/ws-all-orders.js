import {
    WS_ALLORDERS_CONNECTION_CLOSED,
    WS_ALLORDERS_CONNECTION_ERROR,
    WS_ALLORDERS_CONNECTION_SUCCESS,
    WS_ALLORDERS_GET_MESSAGE,
} from "../actions/ws-all-orders";

const initialState = {
    wsConnected: false,
    messages: []
};

export const wsAllOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_ALLORDERS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case WS_ALLORDERS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false
            };

        case WS_ALLORDERS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        case WS_ALLORDERS_GET_MESSAGE:
            return {
                ...state,
                messages: action.payload
            };
        default:
            return state;
    }
};
