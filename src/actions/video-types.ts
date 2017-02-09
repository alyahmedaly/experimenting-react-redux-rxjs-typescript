import { type } from './util';
import { VideosResponse } from '../models/response';
import { VideoItem } from '../models/video-item';

export const ActionTypes = {
    LOAD_Videos: type<LOAD_Videos>('[Video] LOAD Videos'),
    LOAD_Videos_SUCCESS: type<LOAD_Videos_SUCCESS>('[Video] LOAD Videos SUCCESS'),
    LOAD_Videos_FAILS: type<LOAD_Videos_FAILS>('[Video] LOAD Videos FAILS'),

    LOAD_Videos_By_Id: type<LOAD_Videos_By_Id>('[Video] LOAD Videos By Id'),
    LOAD_Videos_By_Id_SUCCESS: type<LOAD_Videos_By_Id_SUCCESS>('[Video] LOAD Videos By Id SUCCESS'),
    LOAD_Videos_By_Id_FAILS: type<LOAD_Videos_By_Id_FAILS>('[Video] LOAD Videos By Id FAILS'),

    LOAD_Videos_Suggestions: type<LOAD_Videos_Suggestions>('[Video] LOAD Videos Suggestions'),
    LOAD_Videos_Suggestions_SUCCESS: type<LOAD_Videos_Suggestions_SUCCESS>('[Video] LOAD Videos Suggestions SUCCESS'),
    LOAD_Videos_Suggestions_FAILS: type<LOAD_Videos_Suggestions_FAILS>('[Video] LOAD Videos Suggestions FAILS'),

    PlayVideo: type<PlayVideo>('[Video] Play Video'),
};

type LOAD_Videos = '[Video] LOAD Videos';
type LOAD_Videos_SUCCESS = '[Video] LOAD Videos SUCCESS';
type LOAD_Videos_FAILS = '[Video] LOAD Videos FAILS';

type LOAD_Videos_By_Id = '[Video] LOAD Videos By Id';
type LOAD_Videos_By_Id_SUCCESS = '[Video] LOAD Videos By Id SUCCESS';
type LOAD_Videos_By_Id_FAILS = '[Video] LOAD Videos By Id FAILS';
type LOAD_Videos_Suggestions = '[Video] LOAD Videos Suggestions';
type LOAD_Videos_Suggestions_SUCCESS = '[Video] LOAD Videos Suggestions SUCCESS';
type LOAD_Videos_Suggestions_FAILS = '[Video] LOAD Videos Suggestions FAILS';
type PlayVideo = '[Video] Play Video';

export interface LOADVideosAction {
    type: LOAD_Videos;
}

export interface LOADVideosSuccessAction {
    type: LOAD_Videos_SUCCESS;
    payload: VideosResponse;
}

export interface LOADVideosFailsAction {
    type: LOAD_Videos_FAILS;
    payload?: {};
}

export interface LOADVideoByIdAction {
    type: LOAD_Videos_By_Id;
    payload: string;
}

export interface LOADVideoByIdSuccessAction {
    type: LOAD_Videos_By_Id_SUCCESS;
    payload: VideoItem;
}

export interface LOADVideoByIdFailsAction {
    type: LOAD_Videos_By_Id_FAILS;
    payload?: {};
}

export interface LOADVideoSuggestionsAction {
    type: LOAD_Videos_Suggestions;
    payload: { skip: number, limit: number };
}

export interface LOADVideoSuggestionsSuccessAction {
    type: LOAD_Videos_Suggestions_SUCCESS;
    payload: VideoItem[];
}

export interface LOADVideoSuggestionsFailsAction {
    type: LOAD_Videos_Suggestions_FAILS;
    payload?: {};
}

export interface PlayVideoAction {
    type: PlayVideo;
    payload: VideoItem;
}

export type Actions = LOADVideosAction | LOADVideosSuccessAction | LOADVideosFailsAction
    | LOADVideoByIdAction | LOADVideoByIdSuccessAction | LOADVideoByIdFailsAction
    | LOADVideoSuggestionsAction | LOADVideoSuggestionsSuccessAction | LOADVideoSuggestionsFailsAction
    | PlayVideoAction;