import React, {PureComponent} from 'react';
import {registerUser} from '../actions/index';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends PureComponent {

    render() {
        return (
            <div id="root" class="offset-md-3 col-md-6">
                <h1>todos</h1>
                <div className="header">
                    <div class="row input-group mb-3">
                        <span class="row mb-3">用户名</span>
                        <input type="text" placeholder="please input username"
                               ref={el => {
                                   this.usernameInput = el;
                               }}
                        />
                    </div>
                    <div class="row input-group mb-3">
                        <label>密码</label>
                        <input type="password" placeholder="please input password"
                               ref={el => {
                                   this.passwordInput = el;
                               }}
                        />
                    </div>
                    <Link to={`/login`}>
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
                    </Link>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = {
    registerUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);