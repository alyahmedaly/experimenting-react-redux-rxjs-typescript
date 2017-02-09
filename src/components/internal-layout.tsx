import * as React from 'react';
import Navbar from './nav-bar';
import { logoutAction } from '../actions/login';
import { RouteComponentProps } from 'react-router';
import { AppState } from '../store/appState';
import { connect, Dispatch } from 'react-redux';

class InternalLayout extends React.Component<InternalLayoutProps, any> {
    render() {
        const {logout, username, children} = this.props;
        return (
            <div>
                <Navbar logout={logout} username={username} />
                {children}
            </div>
        );
    }
}

interface InternalLayoutProps extends RouteComponentProps<any, any> {
    logout: () => void;
    username: string;
}

function mapStateToProps(state: AppState, ownprops: any) {
    return { username: state.login.username };
}

function mapDispatchToProps(dispatch: Dispatch<any>, ...x: any[]) {
    return {
        logout: () => dispatch(logoutAction())
    };
}

export default connect<any, {}, InternalLayoutProps>(mapStateToProps, mapDispatchToProps)(InternalLayout);