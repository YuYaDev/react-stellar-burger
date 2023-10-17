import {
    AUTH_REQUEST,
    AUTH_REQUEST_FAILED,
    AUTH_REQUEST_SUCCESS, GET_USERINFO_FAILED, GET_USERINFO_REQUEST,
    GET_USERINFO_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_FAILED,
    LOGOUT_REQUEST_SUCCESS,
    UPDATE_USERINFO_SUCCESS,
} from "../constants/auth";
import {getCookie} from "../../utils/cookie";
import {TAuthActions} from "../actions/auth";

type TAuthState = {
    authenticationRequest: boolean,
    authenticationRequestFailed: boolean,
    userInfoRequest: boolean,
    userInfoRequestFailed: boolean,
    tokenRequest: boolean,
    tokenRequestFailed: boolean,
    logoutRequest: boolean,
    logoutRequestFailed: boolean,
    isAuthenticated: boolean,
    userName: string,
    userEmail: string,
    accessToken: string | undefined
}

const initialState: TAuthState = {
    authenticationRequest: false,
    authenticationRequestFailed: false,
    userInfoRequest: false,
    userInfoRequestFailed: false,
    tokenRequest: false,
    tokenRequestFailed: false,
    logoutRequest: false,
    logoutRequestFailed: false,
    isAuthenticated: false,
    userName: '',
    userEmail: '',
    accessToken: getCookie('accessToken')
}

export const authReducer = (state = initialState, action: TAuthActions): TAuthState => {
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
        case GET_USERINFO_REQUEST: {
            return {
                ...state,
                userInfoRequest: true,
            };
        }
        case GET_USERINFO_SUCCESS: {
            return {
                ...state,
                userInfoRequest: false,
                isAuthenticated: true,
                userName: action.payload.user.name,
                userEmail: action.payload.user.email,
            };
        }
        case GET_USERINFO_FAILED: {
            return {
                ...state,
                userInfoRequest: false,
                userInfoRequestFailed: true,
            };
        }
        case UPDATE_USERINFO_SUCCESS: {
            return {
                ...state,
                userName: action.payload.user.name,
                userEmail: action.payload.user.email,
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
