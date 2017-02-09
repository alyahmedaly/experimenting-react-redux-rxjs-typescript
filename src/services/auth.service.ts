export class AuthService {
    sessionId: string = 'session_id';
    userName: string = 'user_name';

    //   constructor(private router: Router) { }

    canActivate(): boolean {
        const isAuth = this.isAuthorized();
        if (!isAuth) {
            //   this.router.navigate(['', 'login']);
        }
        return isAuth;
    }

    isAuthorized(): boolean {
        return Boolean(window.localStorage.getItem(this.sessionId));
    }

    signout() {
        window.localStorage.removeItem(this.sessionId);
        window.localStorage.removeItem(this.userName);
    }

    setAuthInfo(sessionId: string, userName: string) {
        window.localStorage.setItem(this.sessionId, sessionId);

        if (userName) {
            window.localStorage.setItem(this.userName, userName);
        }
    }

    getCurrentAuthInfo(): { userName?: string, sessionId?: string } {
        if (this.isAuthorized()) {
            return {
                userName: window.localStorage.getItem(this.userName) as string,
                sessionId: window.localStorage.getItem(this.sessionId) as string
            };
        }
        return {
            userName: undefined,
            sessionId: undefined
        };
    }
}

export const authServiceInstance = new AuthService();
