import {
    WS_ALLORDERS_CONNECTION_CLOSED,
    WS_ALLORDERS_CONNECTION_ERROR, WS_ALLORDERS_CONNECTION_START,
    WS_ALLORDERS_CONNECTION_SUCCESS,
    WS_ALLORDERS_GET_MESSAGE,
} from "../constants/ws-all-orders";
import {TWSAllOrders} from "../actions/ws-all-orders";

type TWSAllOrdersState = {
    wsConnected: boolean,
    setConnection: boolean,
    messages: ReadonlyArray<any>
};

const initialState : TWSAllOrdersState = {
    wsConnected: false,
    setConnection: false,
    messages: []
};

export const wsAllOrdersReducer = (state = initialState, action : TWSAllOrders) => {
    switch (action.type) {
        case WS_ALLORDERS_CONNECTION_START:
            return {
                ...state,
                setConnection: true,
            };
        case WS_ALLORDERS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true,
                setConnection: false,
            };

        case WS_ALLORDERS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false,
                setConnection: false,
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
