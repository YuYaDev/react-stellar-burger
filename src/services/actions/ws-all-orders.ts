import {
    WS_ALLORDERS_CONNECTION_CLOSED,
    WS_ALLORDERS_CONNECTION_ERROR, WS_ALLORDERS_CONNECTION_START,
    WS_ALLORDERS_CONNECTION_SUCCESS, WS_ALLORDERS_GET_MESSAGE,
    WS_ALLORDERS_SEND_MESSAGE
} from "../constants/ws-all-orders";

// types
export interface IWSConnectionStart {
    readonly type: typeof WS_ALLORDERS_CONNECTION_START;
}
export interface IWSConnectionSuccess {
    readonly type: typeof WS_ALLORDERS_CONNECTION_SUCCESS;
}
export interface IWSConnectionError {
    readonly type: typeof WS_ALLORDERS_CONNECTION_ERROR;
}
export interface IWSConnectionClosed {
    readonly type: typeof WS_ALLORDERS_CONNECTION_CLOSED;
}
export interface IWSGetMessage {
    readonly type: typeof WS_ALLORDERS_GET_MESSAGE;
    payload: ReadonlyArray<any>
}
export interface IWSSendMessage {
    readonly type: typeof WS_ALLORDERS_SEND_MESSAGE;
    payload: ReadonlyArray<any>
}

// union types
export type TWSAllOrders = IWSConnectionStart |
                            IWSConnectionSuccess |
                            IWSConnectionError |
                            IWSConnectionClosed |
                            IWSGetMessage |
                            IWSSendMessage;

// actions
export const wsConnectionStart = () : IWSConnectionStart => {
    return {
        type: WS_ALLORDERS_CONNECTION_START
    };
};

export const wsConnectionSuccess = () : IWSConnectionSuccess => {
    return {
        type: WS_ALLORDERS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = () : IWSConnectionError => {
    return {
        type: WS_ALLORDERS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = () : IWSConnectionClosed => {
    return {
        type: WS_ALLORDERS_CONNECTION_CLOSED
    };
};

export const wsGetMessage = (message: ReadonlyArray<any>) : IWSGetMessage => {
    return {
        type: WS_ALLORDERS_GET_MESSAGE,
        payload: message
    };
};

export const wsSendMessage = (message: ReadonlyArray<any>) : IWSSendMessage => {
    return {
        type: WS_ALLORDERS_SEND_MESSAGE,
        payload: message
    };
};

