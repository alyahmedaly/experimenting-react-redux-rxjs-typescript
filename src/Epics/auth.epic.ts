import { Epic, combineEpics } from 'redux-observable';
import { userServiceInstance } from '../services/userService';
import { authServiceInstance } from '../services/auth.service';
import {
    loginSuccessAction, logoutSuccessAction,
    loginFailsAction, logoutFailsAction
} from '../actions/login';
import {
    ActionTypes, LoginAction, LoginSuccessAction
} from '../actions/login-types';
import { AuthUserRequest } from '../models/request';
import { AuthUserResponse } from '../models/response';
import { Action } from 'redux';
import { AppState } from '../store/appState';
import { push } from 'react-router-redux';
import { Observable } from 'rxjs/Observable';

const loginEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOGIN)
    .map<LoginAction, AuthUserRequest>(action => action.payload)
    .mergeMap((payload) =>
        userServiceInstance
            .auth({
                username: payload.username,
                password: payload.password
            })
            .map(data => loginSuccessAction(data))
            .catch((error) => Observable.of(loginFailsAction(error)))
    );

const loginSuccessEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOGIN_SUCCESS)
    .map<LoginSuccessAction, AuthUserResponse>(action => action.payload)
    .do(payload => authServiceInstance.setAuthInfo(payload.sessionId, payload.username))
    .mapTo(push('/'));

const loginoutEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOGOUT)
    .mergeMap((payload) => userServiceInstance
        .logout()
        .map(data => logoutSuccessAction(data))
        .catch((error) => Observable.of(logoutFailsAction(error)))
    );

const loginoutSuccessEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOGOUT_SUCCESS, ActionTypes.LOGOUT_FAILS)
    .do(payload => authServiceInstance.signout())
    .mapTo(push('/login'));

export default combineEpics(loginEpic, loginSuccessEpic, loginoutEpic, loginoutSuccessEpic); 