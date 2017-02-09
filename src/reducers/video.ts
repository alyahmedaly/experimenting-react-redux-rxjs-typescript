import * as video from '../actions/video-types';

import { VideoItem } from '../models/video-item';
export interface VideoState {
    videos: VideoItem[];
    currentVideo: VideoItem | null;
    suggestions: VideoItem[];
    selectedVideo: VideoItem | null;
}

const initState: VideoState = {
    videos: [],
    currentVideo: null,
    suggestions: [],
    selectedVideo: null
};

export const videoReducer = (state = initState, action: video.Actions): VideoState => {
    switch (action.type) {
        case video.ActionTypes.LOAD_Videos_SUCCESS:
            return {
                ...state,
                videos: action.payload.data
            };
        case video.ActionTypes.LOAD_Videos_By_Id_SUCCESS:
            return {
                ...state,
                selectedVideo: action.payload
            };
        case video.ActionTypes.PlayVideo:
            return {
                ...state,
                currentVideo: action.payload
            };
        case video.ActionTypes.LOAD_Videos_Suggestions_SUCCESS:
            return { ...state, suggestions: action.payload };
        default:
            return state;
    }
};
