import React, {PureComponent} from 'react';
import {LoginUser} from "../actions/index";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class Login extends PureComponent {

    render() {
        return (
            <div id="root">
                <div className="header">
                    <div>
                        <span>用户名</span>
                        <input type="text" placeholder="please input username"
                               ref={el => {
                                   this.usernameInput = el;
                               }}
                        />
                    </div>
                    <div>
                        <label>密码</label>
                        <input type="password" placeholder="please input password"
                               ref={el => {
                                   this.passwordInput = el;
                               }}
                        />
                    </div>
                    <Link to={`/`}>
                        <button
                            className="btn btn-info rounded-0"
                            onClick={
                                () => {
                                    this.props.LoginUser(this.usernameInput.value,
                                        this.passwordInput.value);
                                }
                            }
                        >
                            login
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = {
    LoginUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);