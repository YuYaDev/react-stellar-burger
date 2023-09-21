export const socketMiddleware = (wsUrl, wsActions, wsAuth) => {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;

            const { useAuth } = wsAuth;
            const { getState } = store;
            const { accessToken } = getState().authentication;

            if (type === wsInit && useAuth) {
                const token = accessToken.replace('Bearer ', '')
                socket = new WebSocket(`${wsUrl}?token=${token}`);
            }else {
                if (type === wsInit) {
                    socket = new WebSocket(`${wsUrl}`);
                }
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({ type: onOpen, payload: event });
                };

                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;

                    dispatch({ type: onMessage, payload: restParsedData });
                };

                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event });
                };

                if (type === wsSendMessage) {
                    const token = accessToken.replace('Bearer ', '')
                    const message = { ...payload, token: token };
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    };
};
