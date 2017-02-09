import * as React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './app.routes';
import { syncHistoryWithStore } from 'react-router-redux';

import './App.css';
const store = configureStore({} as any);
const history = syncHistoryWithStore(browserHistory, store);

export class App extends React.Component<React.Props<null>, any> {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes(store)}
        </Router>
      </Provider>
    );
  }
}
