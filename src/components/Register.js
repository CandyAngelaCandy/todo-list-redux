import React, { PureComponent } from 'react';
import { registerUser } from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Register extends PureComponent {
  render() {
    return (
      <div id="root" class="offset-md-3 col-md-6">
        <h1>Todo Register</h1>
        <div className="header">
          <div className="form-group row">
            <div>用户名</div>
            <div className="col-sm-10">
              <input
                type="text"
                ref={el => {
                  this.usernameInput = el;
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <div style={{ marginLeft: '6px' }}>密码</div>
            <div className="col-sm-10">
              <input
                style={{ marginLeft: '10px' }}
                type="password"
                ref={el => {
                  this.passwordInput = el;
                }}
              />
            </div>
          </div>
          <button
            className="btn-info rounded-0"
            onClick={() => {
              this.props.registerUser(
                this.usernameInput.value,
                this.passwordInput.value
              );
            }}
          >
            register
          </button>
          <button
            className="offset-md-1 btn-default"
            onClick={() => {
              browserHistory.push('/login');
            }}
          >
            login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {
  registerUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
