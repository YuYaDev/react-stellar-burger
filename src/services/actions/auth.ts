import { api } from "../../utils/api";
import {deleteCookie, setCookie} from "../../utils/cookie";
import {
    AUTH_REQUEST,
    AUTH_REQUEST_FAILED,
    AUTH_REQUEST_SUCCESS, GET_USERINFO_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_FAILED,
    LOGOUT_REQUEST_SUCCESS,
    GET_USERINFO_SUCCESS,
    UPDATE_USERINFO_SUCCESS,
    UPDATE_USERINFO_REQUEST,
    UPDATE_USERINFO_FAILED,
    GET_USERINFO_REQUEST
} from "../constants/auth";
import {TAppThunk} from "../types";
import {IUserInfo} from "../types/data";


// action types
export interface IAuthRequestAction {
    readonly type: typeof AUTH_REQUEST;
}
export interface IAuthRequestSuccessAction {
    readonly type: typeof AUTH_REQUEST_SUCCESS;
    payload: IUserInfo
}
export interface IAuthRequestFailedAction {
    readonly type: typeof AUTH_REQUEST_FAILED;
}

export interface ILogOutRequestAction {
    readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogOutRequestSuccessAction {
    readonly type: typeof LOGOUT_REQUEST_SUCCESS;
}
export interface ILogOutRequestFailedAction {
    readonly type: typeof LOGOUT_REQUEST_FAILED;
}

export interface IUpdateRequestAction {
    readonly type: typeof UPDATE_USERINFO_REQUEST;
}
export interface IUpdateRequestSuccessAction {
    readonly type: typeof UPDATE_USERINFO_SUCCESS;
    payload: IUserInfo
}
export interface IUpdateRequestFailedAction {
    readonly type: typeof UPDATE_USERINFO_FAILED;
}

export interface IGetRequestAction {
    readonly type: typeof GET_USERINFO_REQUEST;
}
export interface IGetRequestSuccessAction {
    readonly type: typeof GET_USERINFO_SUCCESS;
    payload: IUserInfo
}
export interface IGetRequestFailedAction {
    readonly type: typeof GET_USERINFO_FAILED;
}

// type union
export type TAuthActions = IAuthRequestAction |
    IAuthRequestSuccessAction |
    IAuthRequestFailedAction |
    ILogOutRequestAction |
    ILogOutRequestSuccessAction |
    ILogOutRequestFailedAction |
    IUpdateRequestAction |
    IUpdateRequestSuccessAction |
    IUpdateRequestFailedAction |
    IGetRequestAction |
    IGetRequestSuccessAction |
    IGetRequestFailedAction;

// actions
export const authRequest = (): IAuthRequestAction => {
    return {
        type: AUTH_REQUEST,
    }
};
export const authSuccessRequest = (data: IUserInfo): IAuthRequestSuccessAction => {
    return {
        type: AUTH_REQUEST_SUCCESS,
        payload: data
    }
};
export const authRequestFailed = (): IAuthRequestFailedAction => {
    return {
        type: AUTH_REQUEST_FAILED,
    }
};

export const logoutRequest = (): ILogOutRequestAction => {
    return {
        type: LOGOUT_REQUEST,
    }
};
export const logoutRequestSuccess = (): ILogOutRequestSuccessAction => {
    return {
        type: LOGOUT_REQUEST_SUCCESS,
    }
};
export const logoutRequestFailed = (): ILogOutRequestFailedAction => {
    return {
        type: LOGOUT_REQUEST_FAILED,
    }
};

export const updateRequest = (): IUpdateRequestAction => {
    return {
        type: UPDATE_USERINFO_REQUEST,
    }
};
export const updateSuccessRequest = (data: IUserInfo): IUpdateRequestSuccessAction => {
    return {
        type: UPDATE_USERINFO_SUCCESS,
        payload: data
    }
};
export const updateRequestFailed = (): IUpdateRequestFailedAction => {
    return {
        type: UPDATE_USERINFO_FAILED,
    }
};

export const getRequest = (): IGetRequestAction => {
    return {
        type: GET_USERINFO_REQUEST,
    }
};
export const getSuccessRequest = (data: IUserInfo): IGetRequestSuccessAction => {
    return {
        type: GET_USERINFO_SUCCESS,
        payload: data
    }
};
export const getRequestFailed = (): IGetRequestFailedAction => {
    return {
        type: GET_USERINFO_FAILED,
    }
};

export const register: TAppThunk = (userData) => (dispatch)  => {
    dispatch(authRequest());
    api.register(userData).then(res => {
        setCookie('refreshToken', res.refreshToken,  { path: '/' });
        setCookie('accessToken', res.accessToken,  { path: '/' });
        dispatch(authSuccessRequest(res));
    }).catch(() => {
        dispatch(authRequestFailed());
    });
}

export const login: TAppThunk = (userData) => (dispatch) => {
    dispatch(authRequest());
    api.login(userData).then(res => {
        setCookie('refreshToken', res.refreshToken,  { path: '/' });
        setCookie('accessToken', res.accessToken,  { path: '/' });
        dispatch(authSuccessRequest(res));
    }).catch(() => {
        dispatch(authRequestFailed());
    });
}

export const logout: TAppThunk = (token) => (dispatch) => {
    dispatch(logoutRequest());
    api.logout(token).then(() => {
        deleteCookie('refreshToken');
        deleteCookie('accessToken');
        dispatch(logoutRequestSuccess());
    }).catch(() => {
        dispatch(logoutRequestFailed());
    });
}

export const updateUserInfo: TAppThunk = (data, token) => (dispatch) => {
    dispatch(updateRequest());
    api.updateUserInfo(data, token).then(res => {
        dispatch(updateSuccessRequest(res));
    }).catch(() => {
        dispatch(updateRequestFailed());
    });
}

export const getUserInfo: TAppThunk = (token) => (dispatch) => {
    dispatch(getRequest());
    api.getUserInfo(token).then(res => {
        dispatch(getSuccessRequest(res));
    }).catch(() => {
        dispatch(getRequestFailed());
    });
}
