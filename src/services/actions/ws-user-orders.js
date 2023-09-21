export const WS_USERORDERS_CONNECTION_START = 'WS_USERORDERS_CONNECTION_START';
export const WS_USERORDERS_CONNECTION_SUCCESS = 'WS_USERORDERS_CONNECTION_SUCCESS';
export const WS_USERORDERS_CONNECTION_ERROR = 'WS_USERORDERS_CONNECTION_ERROR';
export const WS_USERORDERS_CONNECTION_CLOSED = 'WS_USERORDERS_CONNECTION_CLOSED';
export const WS_USERORDERS_GET_MESSAGE = 'WS_USERORDERS_GET_MESSAGE';
export const WS_USERORDERS_SEND_MESSAGE = 'WS_USERORDERS_SEND_MESSAGE';

export const wsConnectionSuccess = () => {
    return {
        type: WS_USERORDERS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = () => {
    return {
        type: WS_USERORDERS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = () => {
    return {
        type: WS_USERORDERS_CONNECTION_CLOSED
    };
};

export const wsGetMessage = message => {
    return {
        type: WS_USERORDERS_GET_MESSAGE,
        payload: message
    };
};

export const wsSendMessage = message => {
    return {
        type: WS_USERORDERS_SEND_MESSAGE,
        payload: message
    };
};

