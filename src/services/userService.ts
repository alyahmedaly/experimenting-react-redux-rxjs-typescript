import { AuthUserRequest } from '../models/request';
// import { AuthUserResponse, ResponseBase } from '../models/response';

const md5 = require('md5');
import { authServiceInstance } from './auth.service';
import { post, get } from './apiService';

export class UserService {
    _auth = authServiceInstance;
    _http = { post, get };
    //   constructor(private _http: Http, private _auth: AuthService) { }

    auth(request: AuthUserRequest) {
        let body: AuthUserRequest = {};
        body.username = request.username;
        body.password = md5(request.password);
        return this._http
            .post('/user/auth', body)
            .map(r => r.response);
    }

    logout() {
        const {sessionId} = this._auth.getCurrentAuthInfo();
        return this._http
            .get(`/user/logout?sessionId=${sessionId}`)
            .map(r => r.response);
    }

}

export const userServiceInstance = new UserService();
