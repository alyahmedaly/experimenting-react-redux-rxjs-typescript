import { LoginState } from '../reducers/login';
import { VideoState } from '../reducers/video';
import { RouterState } from 'react-router-redux';
import { FormState } from 'redux-form';

export interface AppState {
    login: LoginState;
    routing: RouterState;
    video: VideoState;
    form: FormState;
}
