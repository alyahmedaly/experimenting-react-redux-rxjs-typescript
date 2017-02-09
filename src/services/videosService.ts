// import { VideosResponse, VideoItemResponse, RatingVideoResponse } from '../models/response';
import { RatingVideoRequest } from '../models/request';
import { authServiceInstance } from './auth.service';
import { post, get } from './apiService';

export class VideosService {
    _auth = authServiceInstance;
    _http = { post, get };

    getAll(skip?: number, limit?: number) {
        const {sessionId} = this._auth.getCurrentAuthInfo();
        let url = `/videos?sessionId=${sessionId}`;
        if (skip && limit) {
            url = url.concat(`&skip=${skip}`).concat(`&limit=${limit}`);
        }
        const response = this._http
            .get(url)
            .map(r => r.response);

        response.catch(this.handleError.bind(this));
        return response;
    }

    getVideobyId(videoId: string) {
        const {sessionId} = this._auth.getCurrentAuthInfo();

        const response = this._http
            .get(`/video?sessionId=${sessionId}&videoId=${videoId}`)
            .map(r => r.response);

        response.catch(this.handleError.bind(this));
        return response;
    }

    ratingVideo(request: RatingVideoRequest) {
        const {sessionId} = this._auth.getCurrentAuthInfo();

        const response = this._http
            .post(`/video/ratings?sessionId=${sessionId}`, request)
            .map(r => r.response);

        response.catch(this.handleError.bind(this));
        return response;
    }

    handleError(error: Response) {
        if (error.status === 401) {
            this._auth.signout();
        }
    }
}

export const videosServiceInstance = new VideosService();
