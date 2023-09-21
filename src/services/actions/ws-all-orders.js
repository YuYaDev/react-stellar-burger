export const WS_ALLORDERS_CONNECTION_START = 'WS_ALLORDERS_CONNECTION_START';
export const WS_ALLORDERS_CONNECTION_SUCCESS = 'WS_ALLORDERS_CONNECTION_SUCCESS';
export const WS_ALLORDERS_CONNECTION_ERROR = 'WS_ALLORDERS_CONNECTION_ERROR';
export const WS_ALLORDERS_CONNECTION_CLOSED = 'WS_ALLORDERS_CONNECTION_CLOSED';
export const WS_ALLORDERS_GET_MESSAGE = 'WS_ALLORDERS_GET_MESSAGE';
export const WS_ALLORDERS_SEND_MESSAGE = 'WS_ALLORDERS_SEND_MESSAGE';

export const wsConnectionSuccess = () => {
    return {
        type: WS_ALLORDERS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = () => {
    return {
        type: WS_ALLORDERS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = () => {
    return {
        type: WS_ALLORDERS_CONNECTION_CLOSED
    };
};

export const wsGetMessage = message => {
    return {
        type: WS_ALLORDERS_GET_MESSAGE,
        payload: message
    };
};

export const wsSendMessage = message => {
    return {
        type: WS_ALLORDERS_SEND_MESSAGE,
        payload: message
    };
};

