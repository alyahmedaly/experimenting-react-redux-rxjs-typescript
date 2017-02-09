import { Epic, combineEpics } from 'redux-observable';
import {
    loadVideosSuccessAction,
    loadVideoByIdSuccessAction,
    loadVideoSuggestionsSuccessAction,
    loadVideosFailsAction, loadVideoByIdFailsAction, loadVideoSuggestionsFailsAction
} from '../actions/video';
import {
    ActionTypes, LOADVideoByIdAction, LOADVideoSuggestionsAction
} from '../actions/video-types';
import { videosServiceInstance } from '../services/videosService';
import { Action } from 'redux';
import { AppState } from '../store/appState';
import { Observable } from 'rxjs/Observable';

const LoadVideosEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOAD_Videos)
    .mergeMap(() => {
        return videosServiceInstance
            .getAll()
            .map(data => loadVideosSuccessAction(data))
            .catch((error) => Observable.of(loadVideosFailsAction(error)));
    });

const LoadVideoByIdEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOAD_Videos_By_Id)
    .map<LOADVideoByIdAction, string>(action => action.payload)
    .mergeMap((id) => {
        return videosServiceInstance
            .getVideobyId(id)
            .map(data => loadVideoByIdSuccessAction(data.data))
            .catch((error) => Observable.of(loadVideoByIdFailsAction(error)));
    });

const LoadVideoSuggestionsEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOAD_Videos_Suggestions)
    .map<LOADVideoSuggestionsAction, { skip: number, limit: number }>(action => action.payload)
    .mergeMap((payload) => {
        return videosServiceInstance
            .getAll(payload.skip, payload.limit)
            .map(data => data.data)
            .map(data => loadVideoSuggestionsSuccessAction(data))
            .catch((error) => Observable.of(loadVideoSuggestionsFailsAction(error)));
    });

export default combineEpics(LoadVideosEpic, LoadVideoByIdEpic, LoadVideoSuggestionsEpic); 