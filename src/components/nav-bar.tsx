import * as React from 'react';
import { Link } from 'react-router';
import { RouteComponentProps } from 'react-router';

interface NavbarProps extends RouteComponentProps<any, any> {
    logout: () => void;
    username: string;
}

class Navbar extends React.Component<NavbarProps, any> {
    render() {
        const {username, logout} = this.props;
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link to={`/`} className="navbar-brand btn" >Integrant | VideoPlayer</Link>
                    </div>
                    <div className="collapse navbar-collapse navbar-right" id="menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <p className="navbar-text">Welcome, {username}</p>
                            </li>
                            <li><a className="btn" onClick={logout}>LogOut</a></li>
                        </ul>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Navbar;