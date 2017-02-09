import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { AppState } from './appState';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../Epics/epics';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import * as createLogger from 'redux-logger';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        // tslint:disable-next-line:no-string-literal
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
        // tslint:disable-next-line:no-string-literal
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators or immutablejs support if needed
        }) : compose;

let middleware = [
    reduxImmutableStateInvariant(),
    createEpicMiddleware(rootEpic),
    routerMiddleware(browserHistory)
];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger()];
}

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

export default function configureStore(initialState: AppState) {
    return createStore<AppState>(
        rootReducer,
        initialState,
        enhancer
    );
}
