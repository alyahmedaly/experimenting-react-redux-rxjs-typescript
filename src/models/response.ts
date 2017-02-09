import { VideoItem } from './video-item';

export interface AuthUserResponse extends ResponseBase {
    sessionId: string;
    username: string;
}


export interface ResponseBase {
    status: string;
    error?: string;
}

export interface VideosResponse extends ResponseBase {
    status: string;
    data: VideoItem[];
}

export interface VideoItemResponse extends ResponseBase {
    status: string;
    data: VideoItem;
}

export interface RatingVideoResponse {
    status: string;
    data: VideoItem;
}
