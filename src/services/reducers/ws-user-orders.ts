import {
    WS_USERORDERS_CONNECTION_CLOSED,
    WS_USERORDERS_CONNECTION_ERROR, WS_USERORDERS_CONNECTION_START,
    WS_USERORDERS_CONNECTION_SUCCESS,
    WS_USERORDERS_GET_MESSAGE,
} from "../constants/ws-user-orders";
import {TWSUserOrders} from "../actions/ws-user-orders";
import {IWSMessage} from "../types/ws";

type TWSUserOrdersState = {
    wsConnected: boolean,
    setConnection: boolean,
    messages: IWSMessage,
};

const initialState : TWSUserOrdersState = {
    wsConnected: false,
    setConnection: false,
    messages: {
        orders: [],
        total: 0,
        totalToday: 0,
    }
};

export const wsUserOrdersReducer = (state = initialState, action : TWSUserOrders) => {
    switch (action.type) {
        case WS_USERORDERS_CONNECTION_START:
            return {
                ...state,
                setConnection: true,
            };
        case WS_USERORDERS_CONNECTION_SUCCESS:
            return {
                ...state,
                setConnection: false,
                wsConnected: true
            };

        case WS_USERORDERS_CONNECTION_ERROR:
            return {
                ...state,
                setConnection: false,
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
