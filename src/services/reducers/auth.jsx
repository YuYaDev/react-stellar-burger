import {
    AUTH_REQUEST,
    AUTH_REQUEST_FAILED,
    AUTH_REQUEST_SUCCESS, LOGOUT_REQUEST, LOGOUT_REQUEST_FAILED, LOGOUT_REQUEST_SUCCESS,
    UPDATE_TOKEN_REQUEST, UPDATE_TOKEN_REQUEST_FAILED,
    UPDATE_TOKEN_REQUEST_SUCCESS, UPDATE_USERINFO_FAILED, UPDATE_USERINFO_REQUEST, UPDATE_USERINFO_SUCCESS, updateToken
} from "../actions/auth";
import {deleteCookie, getCookie, setCookie} from "../../utils/cookie";

const initialState = {
    authenticationRequest: false,
    authenticationRequestFailed: false,
    tokenRequest: false,
    tokenRequestFailed: false,
    logoutRequest: false,
    logoutRequestFailed: false,
    isAuthenticated: false,
    userName: '',
    userEmail: '',
    accessToken: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST: {
            return {
                ...state,
                authenticationRequest: true
            };
        }
        case AUTH_REQUEST_SUCCESS: {
            return {
                ...state,
                authenticationRequest: false,
                authenticationRequestFailed: false,
                isAuthenticated: true,
                userName: action.payload.user.name,
                userEmail: action.payload.user.email,
                accessToken: action.payload.accessToken,
            };
        }
        case AUTH_REQUEST_FAILED: {
            return {
                ...state,
                authenticationRequest: false,
                authenticationRequestFailed: true,
                isAuthenticated: false,
                userName: initialState.userName,
                userEmail: initialState.userEmail,
                accessToken: initialState.accessToken,
            };
        }
        case UPDATE_USERINFO_SUCCESS: {
            return {
                ...state,
                authenticationRequest: false,
                authenticationRequestFailed: false,
                userName: action.payload.user.name,
                userEmail: action.payload.user.email,
            };
        }
        case UPDATE_USERINFO_FAILED: {
            return {
                ...state,
            };
        }
        case UPDATE_USERINFO_REQUEST: {
            return {
                ...state,
            };
        }
        case UPDATE_TOKEN_REQUEST: {
            return {
                ...state,
                tokenRequest: true
            };
        }
        case UPDATE_TOKEN_REQUEST_SUCCESS: {
            return {
                ...state,
                tokenRequest: false,
                tokenRequestFailed: false,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
            };
        }
        case UPDATE_TOKEN_REQUEST_FAILED: {
            return {
                ...state,
                tokenRequest: false,
                tokenRequestFailed: true,
                isAuthenticated: false,
            };
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true
            };
        }
        case LOGOUT_REQUEST_SUCCESS: {
            return {
                ...state,
                logoutRequest: false,
                logoutRequestFailed: false,
                isAuthenticated: false,
                accessToken: '',
                userName: '',
                userEmail: ''
            };
        }
        case LOGOUT_REQUEST_FAILED: {
            return {
                ...state,
                logoutRequest: false,
                logoutRequestFailed: true,
            };
        }
        default: {
            return state;
        }
    }
};
