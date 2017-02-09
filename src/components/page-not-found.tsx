import * as React from 'react';
import { Link } from 'react-router';

const PageNotFound: React.SFC<React.Props<void>> = () => {
  return (
    <div>
      <h1>Page Not Found.</h1>
      <p>Go to <Link to="/">Home Page</Link></p>
    </div>
  );
};

export default PageNotFound;