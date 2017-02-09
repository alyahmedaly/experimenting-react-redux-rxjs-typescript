import { AuthUserRequest } from '../models/request';
import { AuthUserResponse } from '../models/response';
import {
    LoginAction, LoginFailsAction, LoginSuccessAction,
    LogoutAction, LogoutFailsAction, LogoutSuccessAction,
    ActionTypes
} from './login-types';

export function loginAction(payload: AuthUserRequest): LoginAction {
    return { type: ActionTypes.LOGIN, payload };
}

export function loginSuccessAction(payload: AuthUserResponse): LoginSuccessAction {
    return { type: ActionTypes.LOGIN_SUCCESS, payload };
}

export function loginFailsAction(payload?: any): LoginFailsAction {
    return { type: ActionTypes.LOGIN_FAILS, payload };
}

export function logoutAction(payload: any = null): LogoutAction {
    return { type: ActionTypes.LOGOUT, payload };
}

export function logoutSuccessAction(payload: any = null): LogoutSuccessAction {
    return { type: ActionTypes.LOGOUT_SUCCESS, payload };
}

export function logoutFailsAction(payload: any = null): LogoutFailsAction {
    return { type: ActionTypes.LOGOUT_FAILS, payload };
}
