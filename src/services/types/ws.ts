import {
    WS_ALLORDERS_CONNECTION_CLOSED, WS_ALLORDERS_CONNECTION_ERROR,
    WS_ALLORDERS_CONNECTION_START,
    WS_ALLORDERS_CONNECTION_SUCCESS, WS_ALLORDERS_GET_MESSAGE,
    WS_ALLORDERS_SEND_MESSAGE
} from "../constants/ws-all-orders";
import {
    WS_USERORDERS_CONNECTION_CLOSED, WS_USERORDERS_CONNECTION_ERROR,
    WS_USERORDERS_CONNECTION_START,
    WS_USERORDERS_CONNECTION_SUCCESS, WS_USERORDERS_GET_MESSAGE,
    WS_USERORDERS_SEND_MESSAGE
} from "../constants/ws-user-orders";

export type TWSMiddlewareAllOrdersActions = {
    wsInit: typeof WS_ALLORDERS_CONNECTION_START,
    wsSendMessage: typeof WS_ALLORDERS_SEND_MESSAGE,
    onOpen: typeof WS_ALLORDERS_CONNECTION_SUCCESS,
    onClose: typeof WS_ALLORDERS_CONNECTION_CLOSED,
    onError: typeof WS_ALLORDERS_CONNECTION_ERROR,
    onMessage: typeof WS_ALLORDERS_GET_MESSAGE
}

export type TWSMiddlewareUserOrdersActions = {
    wsInit: typeof WS_USERORDERS_CONNECTION_START,
    wsSendMessage: typeof WS_USERORDERS_SEND_MESSAGE,
    onOpen: typeof WS_USERORDERS_CONNECTION_SUCCESS,
    onClose: typeof WS_USERORDERS_CONNECTION_CLOSED,
    onError: typeof WS_USERORDERS_CONNECTION_ERROR,
    onMessage: typeof WS_USERORDERS_GET_MESSAGE
};
export type TSocketMiddlewareActions = TWSMiddlewareAllOrdersActions | TWSMiddlewareUserOrdersActions;

export type TWSAuth = {
    useAuth: boolean
};

export interface IWSMessage {
    orders: any[],
    total: number,
    totalToday: number,
}
