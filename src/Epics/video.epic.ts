import { Epic, combineEpics } from 'redux-observable';
import {
    ActionTypes, LOADVideosSuccessAction,
    LOADVideoByIdAction, LOADVideoByIdSuccessAction,
    LOADVideoSuggestionsAction, LOADVideoSuggestionsSuccessAction,
    LOADVideosFailsAction, LOADVideoByIdFailsAction, LOADVideoSuggestionsFailsAction
} from '../actions/video';
import { videosServiceInstance } from '../services/videosService';
import { Action } from 'redux';
import { AppState } from '../store/appState';
import { Observable } from 'rxjs/Observable';

const LoadVideosEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOAD_Videos)
    .mergeMap(() => {
        return videosServiceInstance
            .getAll()
            .map(data => new LOADVideosSuccessAction(data))
            .catch((error) => Observable.of(new LOADVideosFailsAction(error)));
    });

const LoadVideoByIdEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOAD_Videos_By_Id)
    .map<LOADVideoByIdAction, string>(action => action.payload)
    .mergeMap((id) => {
        return videosServiceInstance
            .getVideobyId(id)
            .map(data => new LOADVideoByIdSuccessAction(data.data))
            .catch((error) => Observable.of(new LOADVideoByIdFailsAction(error)));
    });

const LoadVideoSuggestionsEpic: Epic<Action, AppState> = (action$) => action$
    .ofType(ActionTypes.LOAD_Videos_Suggestions)
    .map<LOADVideoSuggestionsAction, { skip: number, limit: number }>(action => action.payload)
    .mergeMap((payload) => {
        return videosServiceInstance
            .getAll(payload.skip, payload.limit)
            .map(data => data.data)
            .map(data => new LOADVideoSuggestionsSuccessAction(data))
            .catch((error) => Observable.of(new LOADVideoSuggestionsFailsAction(error)));
    });

export default combineEpics(LoadVideosEpic, LoadVideoByIdEpic, LoadVideoSuggestionsEpic); 