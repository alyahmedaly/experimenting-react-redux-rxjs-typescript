import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/observable/dom/ajax';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
