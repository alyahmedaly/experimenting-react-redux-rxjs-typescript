import { type } from './util';
import { VideosResponse } from '../models/response';
import { VideoItem } from '../models/video-item';
export const ActionTypes = {
    LOAD_Videos: type<'[Video] LOAD Videos'>('[Video] LOAD Videos'),
    LOAD_Videos_SUCCESS: type<'[Video] LOAD Videos SUCCESS'>('[Video] LOAD Videos SUCCESS'),
    LOAD_Videos_FAILS: type<'[Video] LOAD Videos FAILS'>('[Video] LOAD Videos FAILS'),

    LOAD_Videos_By_Id: type<'[Video] LOAD Videos By Id'>('[Video] LOAD Videos By Id'),
    LOAD_Videos_By_Id_SUCCESS: type<'[Video] LOAD Videos By Id SUCCESS'>('[Video] LOAD Videos By Id SUCCESS'),
    LOAD_Videos_By_Id_FAILS: type<'[Video] LOAD Videos By Id FAILS'>('[Video] LOAD Videos By Id FAILS'),

    LOAD_Videos_Suggestions: type<'[Video] LOAD Videos Suggestions'>('[Video] LOAD Videos Suggestions'),
    // tslint:disable-next-line:max-line-length
    LOAD_Videos_Suggestions_SUCCESS: type<'[Video] LOAD Videos Suggestions SUCCESS'>('[Video] LOAD Videos Suggestions SUCCESS'),
    LOAD_Videos_Suggestions_FAILS: type<'[Video] LOAD Videos Suggestions FAILS'>('[Video] LOAD Videos Suggestions FAILS'),

    PlayVideo: type<'[Video] Play Video'>('[Video] Play Video'),
};

export class LOADVideosAction {
    type = ActionTypes.LOAD_Videos;
    constructor() {
        return { type: this.type };
    }
}

export class LOADVideosSuccessAction {
    type = ActionTypes.LOAD_Videos_SUCCESS;
    constructor(public payload: VideosResponse) {
        return { type: this.type, payload };
    }
}

export class LOADVideosFailsAction {
    type = ActionTypes.LOAD_Videos_FAILS;
    constructor(public payload?: {}) {
        return { type: this.type, payload };
    }
}

export class LOADVideoByIdAction {
    type = ActionTypes.LOAD_Videos_By_Id;
    constructor(public payload: string) {
        return { type: this.type, payload };
    }
}

export class LOADVideoByIdSuccessAction {
    type = ActionTypes.LOAD_Videos_By_Id_SUCCESS;
    constructor(public payload: VideoItem) {
        return { type: this.type, payload };
    }
}

export class LOADVideoByIdFailsAction {
    type = ActionTypes.LOAD_Videos_By_Id_FAILS;
    constructor(public payload?: {}) {
        return { type: this.type, payload };
    }
}

export class LOADVideoSuggestionsAction {
    type = ActionTypes.LOAD_Videos_Suggestions;
    constructor(public payload: { skip: number, limit: number }) {
        return { type: this.type, payload };
    }
}

export class LOADVideoSuggestionsSuccessAction {
    type = ActionTypes.LOAD_Videos_Suggestions_SUCCESS;
    constructor(public payload: VideoItem[]) {
        return { type: this.type, payload };
    }
}

export class LOADVideoSuggestionsFailsAction {
    type = ActionTypes.LOAD_Videos_Suggestions_FAILS;
    constructor(public payload?: {}) {
        return { type: this.type, payload };
    }
}

export class PlayVideoAction {
    type = ActionTypes.PlayVideo;
    constructor(public payload: VideoItem) {
        return { type: this.type, payload };
    }
}

export type Actions = LOADVideosAction | LOADVideosSuccessAction | LOADVideosFailsAction
    | LOADVideoByIdAction | LOADVideoByIdSuccessAction | LOADVideoByIdFailsAction
    | LOADVideoSuggestionsAction | LOADVideoSuggestionsSuccessAction | LOADVideoSuggestionsFailsAction
    | PlayVideoAction;