import * as React from 'react';

export class Home extends React.Component<React.Props<null>, any> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}