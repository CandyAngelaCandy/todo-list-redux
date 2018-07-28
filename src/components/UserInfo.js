import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <h4 className="header">
          {this.props.userInfo['name']}
      </h4>
    );
  }
}

export default UserInfo;
