import { combineEpics } from 'redux-observable';
import authEpic from './auth.epic';
import videoEpic from './video.epic';

const root = combineEpics(
  authEpic,
  videoEpic
);

export default root;