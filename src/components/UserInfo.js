import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <span>{this.props.userInfo["name"]}</span>
      </div>
    );
  }
}

export default UserInfo;
