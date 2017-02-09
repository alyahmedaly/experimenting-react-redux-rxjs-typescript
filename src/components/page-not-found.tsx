import * as React from 'react';
import { Link } from 'react-router';

export class PageNotFound extends React.Component<React.Props<null>, any> {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    );
  }
}