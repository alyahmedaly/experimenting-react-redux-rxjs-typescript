export interface AuthUserRequest {
    username?: string;
    password?: string;
}

export interface RatingVideoRequest {
    videoId: string;
    rating: string;
}
