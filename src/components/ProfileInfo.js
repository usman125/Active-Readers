import React, { Component } from 'react';
import { Image } from './common';
import { connect } from "react-redux";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="info-array">
        <Image
          classes="avatar-img"
          src="https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg"
        />
        <div className="values-block">
          <span className="name">{this.props.name}</span>
          <span className="email">{this.props.email}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, email } = state.auth.user;
  return { name, email };
}

export default connect(mapStateToProps, {

})(ProfileInfo);