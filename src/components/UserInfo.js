import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <label className="header">
          hello {localStorage.getItem('username')}
        </label>
        <button
          style={{ marginLeft: '95px' }}
          className="btn btn-link"
          onClick={() => {
            hashHistory.push('/');
            localStorage.setItem('token', '');
          }}
        >
          sign out
        </button>
      </div>
    );
  }
}

export default UserInfo;
