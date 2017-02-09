import { AuthUserRequest } from '../models/request';
import { AuthUserResponse } from '../models/response';
import { type } from './util';

export const ActionTypes = {
    LOGIN: type<LOGIN>('[Login] Login'),
    LOGIN_SUCCESS: type<LOGIN_SUCCESS>('[Login] Login SUCCESS'),
    LOGIN_FAILS: type<LOGIN_FAILS>('[Login] Login FAILS'),

    LOGOUT: type<LOGOUT>('[Login] Logout'),
    LOGOUT_SUCCESS: type<LOGOUT_SUCCESS>('[Login] Logout SUCCESS'),
    LOGOUT_FAILS: type<LOGOUT_FAILS>('[Login] Logout FAILS')
};

type LOGIN = '[Login] Login';
type LOGIN_SUCCESS = '[Login] Login SUCCESS';
type LOGIN_FAILS = '[Login] Login FAILS';
type LOGOUT = '[Login] Logout';
type LOGOUT_SUCCESS = '[Login] Logout SUCCESS';
type LOGOUT_FAILS = '[Login] Logout FAILS';

export interface LoginAction {
    type: LOGIN;
    payload: AuthUserRequest;
}

export interface LoginSuccessAction {
    type: LOGIN_SUCCESS;
    payload: AuthUserResponse;
}

export interface LoginFailsAction {
    type: LOGIN_FAILS;
    payload?: any;
}
export interface LogoutAction {
    type: LOGOUT;
    payload: any;
}
export interface LogoutSuccessAction {
    type: LOGOUT_SUCCESS;
    payload: any;
}
export interface LogoutFailsAction {
    type: LOGOUT_FAILS;
    payload?: any;
}

export type Actions = LoginAction | LoginSuccessAction | LoginFailsAction
    | LogoutAction | LogoutSuccessAction | LogoutFailsAction;