import { api } from "../../utils/api";
import {deleteCookie, getCookie, setCookie} from "../../utils/cookie";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_FAILED = 'AUTH_REQUEST_FAILED';
export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_REQUEST_SUCCESS = 'UPDATE_TOKEN_REQUEST_SUCCESS';
export const UPDATE_TOKEN_REQUEST_FAILED = 'UPDATE_TOKEN_REQUEST_FAILED';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS';
export const LOGOUT_REQUEST_FAILED = 'LOGOUT_REQUEST_FAILED';
export const UPDATE_USERINFO_REQUEST = 'UPDATE_USERINFO_REQUEST';
export const UPDATE_USERINFO_SUCCESS = 'UPDATE_USERINFO_SUCCESS';
export const UPDATE_USERINFO_FAILED = 'UPDATE_USERINFO_FAILED';
export const GET_USERINFO_REQUEST = 'GET_USERINFO_REQUEST';
export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS';
export const GET_USERINFO_FAILED = 'GET_USERINFO_FAILED';

export function register(userData) {
    return function(dispatch) {
        dispatch({ type: AUTH_REQUEST });
        api.register(userData).then(res => {
            setCookie('refreshToken', res.refreshToken);
            setCookie('accessToken', res.accessToken);
            dispatch({
                type: AUTH_REQUEST_SUCCESS,
                payload: res
            });
        }).catch(() => {
            dispatch({
                type: AUTH_REQUEST_FAILED
            });
        });
    };
}

export function login(userData) {
    return function(dispatch) {
        dispatch({ type: AUTH_REQUEST });
        api.login(userData).then(res => {
            setCookie('refreshToken', res.refreshToken);
            setCookie('accessToken', res.accessToken);
            dispatch({
                type: AUTH_REQUEST_SUCCESS,
                payload: res
            });
        }).catch(() => {
            dispatch({
                type: AUTH_REQUEST_FAILED
            });
        });
    };
}


export function logout(token) {
    return function(dispatch) {
        dispatch({ type: LOGOUT_REQUEST });
        api.logout(token).then(() => {
            deleteCookie('refreshToken');
            deleteCookie('accessToken');
            dispatch({
                type: LOGOUT_REQUEST_SUCCESS,
            });
        }).catch(() => {
            dispatch({
                type: LOGOUT_REQUEST_FAILED
            });
        });
    };
}

export function updateToken(token) {
    return function(dispatch) {
        dispatch({ type: UPDATE_TOKEN_REQUEST });
        api.updateToken(token).then(res => {

            setCookie('accessToken', res.accessToken);
            dispatch(getUserInfo(res.accessToken));

            dispatch({
                type: UPDATE_TOKEN_REQUEST_SUCCESS,
                payload: res
            });
        }).catch(() => {
            dispatch({
                type: UPDATE_TOKEN_REQUEST_FAILED
            });
        });
    };
}

export function updateUserInfo(data, token) {
    return function(dispatch) {
        dispatch({ type: UPDATE_USERINFO_REQUEST });
        api.updateUserInfo(data, token).then(res => {
            dispatch({
                type: UPDATE_USERINFO_SUCCESS,
                payload: res
            });
        }).catch((e) => {
            if(e.status === 401)
                dispatch(updateToken(getCookie('refreshToken')))
            dispatch({
                type: UPDATE_USERINFO_FAILED
            });
        });
    };
}

export function getUserInfo(token) {
    return function(dispatch) {
        dispatch({ type: GET_USERINFO_REQUEST });
        api.getUserInfo(token).then(res => {
            dispatch({
                type: GET_USERINFO_SUCCESS,
                payload: res
            });
        }).catch((e) => {
            if(e.status === 401)
                dispatch(updateToken(getCookie('refreshToken')))
            dispatch({
                type: GET_USERINFO_FAILED
            });
        });
    };
}
