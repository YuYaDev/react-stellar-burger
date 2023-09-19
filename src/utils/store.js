import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "../services/reducers/rootReducer";
import {socketMiddleware} from "./socketMiddleware";
import {
    WS_ALLORDERS_CONNECTION_CLOSED,
    WS_ALLORDERS_CONNECTION_ERROR,
    WS_ALLORDERS_CONNECTION_START,
    WS_ALLORDERS_CONNECTION_SUCCESS,
    WS_ALLORDERS_GET_MESSAGE,
    WS_ALLORDERS_SEND_MESSAGE
} from '../services/actions/ws-all-orders';

import {
    WS_USERORDERS_CONNECTION_CLOSED,
    WS_USERORDERS_CONNECTION_ERROR,
    WS_USERORDERS_CONNECTION_START,
    WS_USERORDERS_CONNECTION_SUCCESS,
    WS_USERORDERS_GET_MESSAGE,
    WS_USERORDERS_SEND_MESSAGE
} from '../services/actions/ws-user-orders';

const wsUrl_allOrders = 'wss://norma.nomoreparties.space/orders/all';

const wsActions_allOrders = {
    wsInit: WS_ALLORDERS_CONNECTION_START,
    wsSendMessage: WS_ALLORDERS_SEND_MESSAGE,
    onOpen: WS_ALLORDERS_CONNECTION_SUCCESS,
    onClose: WS_ALLORDERS_CONNECTION_CLOSED,
    onError: WS_ALLORDERS_CONNECTION_ERROR,
    onMessage: WS_ALLORDERS_GET_MESSAGE
};

const wsAuth_allOrders = {
    useAuth: false
};

const wsUrl_userOrders = 'wss://norma.nomoreparties.space/orders';

const wsActions_userOrders = {
    wsInit: WS_USERORDERS_CONNECTION_START,
    wsSendMessage: WS_USERORDERS_SEND_MESSAGE,
    onOpen: WS_USERORDERS_CONNECTION_SUCCESS,
    onClose: WS_USERORDERS_CONNECTION_CLOSED,
    onError: WS_USERORDERS_CONNECTION_ERROR,
    onMessage: WS_USERORDERS_GET_MESSAGE
};


const wsAuth_userOrders = {
    useAuth: true,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
        .concat(socketMiddleware(wsUrl_allOrders, wsActions_allOrders, wsAuth_allOrders),
            socketMiddleware(wsUrl_userOrders, wsActions_userOrders, wsAuth_userOrders))
});



