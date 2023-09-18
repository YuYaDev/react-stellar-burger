import {
    WS_USERORDERS_CONNECTION_CLOSED,
    WS_USERORDERS_CONNECTION_ERROR,
    WS_USERORDERS_CONNECTION_SUCCESS,
    WS_USERORDERS_GET_MESSAGE,
} from "../actions/ws-user-orders";

const initialState = {
    wsConnected: false,
    messages: []
};

export const wsUserOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_USERORDERS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case WS_USERORDERS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false
            };

        case WS_USERORDERS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        case WS_USERORDERS_GET_MESSAGE:
            return {
                ...state,
                messages: action.payload
            };
        default:
            return state;
    }
};
