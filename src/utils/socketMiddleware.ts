
import {Middleware, MiddlewareAPI} from 'redux';
import {TSocketMiddlewareActions, TWSAuth} from "../services/types/ws";
import {TAppDispatch, TAppState} from "../services/types";

export const socketMiddleware = (wsUrl: string, wsActions: TSocketMiddlewareActions, wsAuth: TWSAuth) : Middleware  => {
    return (store: MiddlewareAPI<TAppDispatch, TAppState>) => {
        let socket: WebSocket | null = null;

        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;

            const { useAuth } = wsAuth;
            const { getState } = store;
            const { accessToken } = getState().authentication;

            if (type === wsInit && useAuth && accessToken) {
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

                if (type === wsSendMessage && accessToken) {
                    const token = accessToken.replace('Bearer ', '')
                    const message = { ...payload, token: token };
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    };
};
