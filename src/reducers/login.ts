import * as login from '../actions/login-types';

import { authServiceInstance } from '../services/auth.service';
export interface LoginState {
    isAuth: boolean;
    username: string | null;
    sessionId: string | null;
}

const initState: LoginState = {
    isAuth: authServiceInstance.isAuthorized(),
    username: window.localStorage.getItem('user_name'),
    sessionId: null
};

export const loginReducer = (state = initState, action: login.Actions): LoginState => {
    switch (action.type) {
        case login.ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                username: action.payload.username,
                sessionId: action.payload.sessionId
            };
        case login.ActionTypes.LOGOUT_SUCCESS:
            return { ...state, isAuth: false,username:null,sessionId:null };
        default:
            return state;
    }
};
