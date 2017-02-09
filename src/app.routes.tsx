import * as React from 'react';
import { IndexRedirect, Route } from 'react-router';
import { Store } from 'redux';
import { push } from 'react-router-redux';
import Login from './components/login';
import PageNotFound from './components/page-not-found';
import Home from './components/home';
import InternalLayout from './components/internal-layout';
import VideoList from './components/video-list';
import VideoDetails from './components/video-details';

import { AppState } from './store/appState';

const routesFactory = (store) => {
    const requireAuthWithStore = requireAuth.bind(null, store);
    return (
        <Route path="/" component={Home} >
            <IndexRedirect to="/internal/videos" />
            <Route path="internal" component={InternalLayout} onEnter={requireAuthWithStore} >
                <IndexRedirect to="/internal/videos" />
                <Route path="videos" component={VideoList} />
                <Route path="video/:id" component={VideoDetails} />
            </Route>
            <Route path="login" component={Login} />
            <Route path="*" component={PageNotFound} />
        </Route>
    );
};

export default routesFactory;

function requireAuth(store: Store<AppState>, nextState: any, replace: any) {
    const {login} = store.getState();
    if (login && !login.isAuth) {
        store.dispatch(push('/login'));
    }
}
