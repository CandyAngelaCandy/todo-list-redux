import React, {PureComponent} from 'react';
import {registerUser,LoginUser} from "../actions/index";
import {connect} from "react-redux";

class Login extends PureComponent {

    render() {
        return (
            <div id="root" class="offset-md-3 col-md-6">
                <h1>todos</h1>
                <div className="header">
                    <div className="form-group row">
                        <div>用户名</div>
                        <div className="col-sm-10">
                            <input type="text" placeholder="please input username"
                                   ref={el => {
                                       this.usernameInput = el;
                                   }}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div>密码</div>
                        <div className="col-sm-10">
                            <input type="password" placeholder="please input password"
                                   ref={el => {
                                       this.passwordInput = el;
                                   }}
                            />
                        </div>
                    </div>
                    <button
                        className="btn btn-info rounded-0"
                        onClick={
                            () => {
                                this.props.registerUser(this.usernameInput.value,
                                    this.passwordInput.value);
                            }
                        }
                    >
                        register
                    </button>
                    <button
                            className="offset-md-1 btn btn-info rounded-0"
                            onClick={
                                () => {
                                    this.props.LoginUser(this.usernameInput.value,
                                        this.passwordInput.value);
                                }
                            }
                        >
                        login
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = {
    registerUser,
    LoginUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);