import {
    WS_USERORDERS_CONNECTION_CLOSED,
    WS_USERORDERS_CONNECTION_ERROR,
    WS_USERORDERS_CONNECTION_START,
    WS_USERORDERS_CONNECTION_SUCCESS,
    WS_USERORDERS_GET_MESSAGE,
    WS_USERORDERS_SEND_MESSAGE
} from "../constants/ws-user-orders";


// types
export interface IWSUserConnectionStart {
    readonly type: typeof WS_USERORDERS_CONNECTION_START;
}
export interface IWSUserConnectionSuccess {
    readonly type: typeof WS_USERORDERS_CONNECTION_SUCCESS;
}
export interface IWSUserConnectionError {
    readonly type: typeof WS_USERORDERS_CONNECTION_ERROR;
}
export interface IWSUserConnectionClosed {
    readonly type: typeof WS_USERORDERS_CONNECTION_CLOSED;
}
export interface IWSUserGetMessage {
    readonly type: typeof WS_USERORDERS_GET_MESSAGE;
    payload: ReadonlyArray<any>
}
export interface IWSUserSendMessage {
    readonly type: typeof WS_USERORDERS_SEND_MESSAGE;
    payload: ReadonlyArray<any>
}

// union types
export type TWSUserOrders = IWSUserConnectionStart |
    IWSUserConnectionSuccess |
    IWSUserConnectionError |
    IWSUserConnectionClosed |
    IWSUserGetMessage |
    IWSUserSendMessage;

// actions
export const wsUserConnectionStart = () : IWSUserConnectionStart => {
    return {
        type: WS_USERORDERS_CONNECTION_START
    };
};

export const wsUserConnectionSuccess = () : IWSUserConnectionSuccess => {
    return {
        type: WS_USERORDERS_CONNECTION_SUCCESS
    };
};

export const wsUserConnectionError = () : IWSUserConnectionError => {
    return {
        type: WS_USERORDERS_CONNECTION_ERROR
    };
};

export const wsUserConnectionClosed = () : IWSUserConnectionClosed=> {
    return {
        type: WS_USERORDERS_CONNECTION_CLOSED
    };
};

export const wsUserGetMessage = (message: ReadonlyArray<any>) : IWSUserGetMessage => {
    return {
        type: WS_USERORDERS_GET_MESSAGE,
        payload: message
    };
};

export const wsUserSendMessage = (message: ReadonlyArray<any>) : IWSUserSendMessage => {
    return {
        type: WS_USERORDERS_SEND_MESSAGE,
        payload: message
    };
};

