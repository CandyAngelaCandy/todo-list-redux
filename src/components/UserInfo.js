import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    console.log('userInfo data' + this.props.userInfo);
    return (
      <div>
        <span>{this.props.userInfo["name"]}</span>
      </div>
    );
  }
}

export default UserInfo;
