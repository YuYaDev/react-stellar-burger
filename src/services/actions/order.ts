import { api } from "../../utils/api";
import {CREATE_ORDER_FAILED, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "../constants/order";
import {IOrder} from "../types/data";
import {TAppDispatch, TAppThunk} from "../types";

// types
export interface IOrderRequestAction {
    readonly type: typeof CREATE_ORDER_REQUEST;
}
export interface IOrderRequestSuccessAction {
    readonly type: typeof CREATE_ORDER_SUCCESS;
    payload: number
}
export interface IOrderRequestFailedAction {
    readonly type: typeof CREATE_ORDER_FAILED;
}

// actions
export const orderRequest = (): IOrderRequestAction => {
    return {
        type: CREATE_ORDER_REQUEST,
    }
};
export const orderRequestSuccess = (data: number): IOrderRequestSuccessAction => {
    return {
        type: CREATE_ORDER_SUCCESS,
        payload: data
    }
};
export const orderRequestFailed = (): IOrderRequestFailedAction => {
    return {
        type: CREATE_ORDER_FAILED,
    }
};

// types union
export type TOrderActions = IOrderRequestAction | IOrderRequestSuccessAction | IOrderRequestFailedAction;

// thunk
export const createOrder: TAppThunk = (orderData, token) => (dispatch) => {
    dispatch(orderRequest);
    api.createOrder(orderData, token).then(res => {
        dispatch(orderRequestSuccess(res.order.number));
    }).catch(() => {
        dispatch(orderRequestFailed);
    });
}
