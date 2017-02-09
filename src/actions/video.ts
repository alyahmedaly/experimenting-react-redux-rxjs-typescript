import { VideosResponse } from '../models/response';
import { VideoItem } from '../models/video-item';

import {
    LOADVideoByIdAction, LOADVideoByIdFailsAction, LOADVideoByIdSuccessAction,
    LOADVideosAction, LOADVideosFailsAction, LOADVideosSuccessAction,
    LOADVideoSuggestionsAction, LOADVideoSuggestionsFailsAction, LOADVideoSuggestionsSuccessAction,
    PlayVideoAction, ActionTypes
} from './video-types';

export function loadVideosAction(): LOADVideosAction {
    return { type: ActionTypes.LOAD_Videos };
}

export function loadVideosSuccessAction(payload: VideosResponse): LOADVideosSuccessAction {
    return { type: ActionTypes.LOAD_Videos_SUCCESS, payload };
}

export function loadVideosFailsAction(payload?: {}): LOADVideosFailsAction {
    return { type: ActionTypes.LOAD_Videos_FAILS, payload };
}

export function loadVideoByIdAction(payload: string): LOADVideoByIdAction {
    return { type: ActionTypes.LOAD_Videos_By_Id, payload };
}

export function loadVideoByIdSuccessAction(payload: VideoItem): LOADVideoByIdSuccessAction {
    return { type: ActionTypes.LOAD_Videos_By_Id_SUCCESS, payload };
}

export function loadVideoByIdFailsAction(payload?: {}): LOADVideoByIdFailsAction {
    return { type: ActionTypes.LOAD_Videos_By_Id_FAILS, payload };
}

export function loadVideoSuggestionsAction(payload: { skip: number, limit: number }): LOADVideoSuggestionsAction {
    return { type: ActionTypes.LOAD_Videos_Suggestions, payload };
}

export function loadVideoSuggestionsSuccessAction(payload: VideoItem[]): LOADVideoSuggestionsSuccessAction {
    return { type: ActionTypes.LOAD_Videos_Suggestions_SUCCESS, payload };
}

export function loadVideoSuggestionsFailsAction(payload?: {}): LOADVideoSuggestionsFailsAction {
    return { type: ActionTypes.LOAD_Videos_Suggestions_FAILS, payload };
}

export function playVideoAction(payload: VideoItem): PlayVideoAction {
    return { type: ActionTypes.PlayVideo, payload };
}