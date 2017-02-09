import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { loginAction } from '../actions/login';
import { authServiceInstance } from '../services/auth.service';
import { AppState } from '../store/appState';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import { reduxForm, Field } from 'redux-form';

interface LoginProps extends RouteComponentProps<any, any> {
    errorMessage: string;
    onSubmit: () => void;
    goToHome: () => void;
    handleSubmit: () => void;
    isAuth: boolean;
}

function mapStateToProps(state: AppState) {
    if (state.login) {
        return {
            isAuth: state.login.isAuth
        };
    }
    return { isAuth: false };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        onSubmit: (value) => dispatch(loginAction(value)),
        goToHome: () => dispatch(push('/')),
    };
}

class Login extends React.Component<LoginProps, void> {
    _auth = authServiceInstance;

    constructor(props: LoginProps, context: any) {
        super(props, context);
    }

    componentWillMount() {
        if (this.props.isAuth) {
            this.props.goToHome();
        }
    }

    render() {
        const {handleSubmit, errorMessage} = this.props;
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <section className="login">
                        <h2>sign in</h2>
                        {
                            errorMessage &&
                            <div className="alert alert-danger error">{errorMessage}</div>
                        }
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label >Username</label>
                                <Field
                                    component="input"
                                    type="text"
                                    className="form-control"
                                    name="username"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <Field
                                    component="input"
                                    type="password"
                                    className="form-control"
                                    name="password"
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-success btn-block"
                                    type="submit"
                                >
                                    login
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }

}

export default connect<{}, {}, LoginProps>(
    mapStateToProps, mapDispatchToProps
)(reduxForm({ form: 'login' })(Login));