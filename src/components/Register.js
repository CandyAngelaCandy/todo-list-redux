import React, {PureComponent} from 'react';
import {registerUser} from '../actions/index';
import {connect} from 'react-redux';

class Register extends PureComponent {

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