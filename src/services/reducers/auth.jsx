import {
    AUTH_REQUEST,
    AUTH_REQUEST_FAILED,
    AUTH_REQUEST_SUCCESS,
    GET_USERINFO_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_FAILED,
    LOGOUT_REQUEST_SUCCESS,
    UPDATE_TOKEN_REQUEST,
    UPDATE_TOKEN_REQUEST_FAILED,
    UPDATE_TOKEN_REQUEST_SUCCESS,
    UPDATE_USERINFO_SUCCESS,
} from "../actions/auth";

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
        case GET_USERINFO_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                userName: action.payload.user.name,
                userEmail: action.payload.user.email,
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
