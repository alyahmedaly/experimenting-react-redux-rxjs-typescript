import { combineReducers } from 'redux';
import { AppState } from '../store/appState';
import { loginReducer } from './login';
import { videoReducer } from './video';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers<AppState>({
    login: loginReducer,
    routing: routerReducer,
    video: videoReducer,
    form: formReducer
});

export default rootReducer;