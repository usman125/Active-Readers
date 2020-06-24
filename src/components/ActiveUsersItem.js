import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersList
} from "../actions";
import { Image } from './common';
import DummyImage from '../assets/images/200x200.png'
import NumberIndicator from "./NumberIndicator";
// import DummyImage from '../assets/images/dummy-profile.png'

class ActiveUsersItem extends Component {

  componentDidMount() {
    // this.props.getUsersList(this.props.user._id);
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="row no-gutters user-profile-block">
          <div className="col-md-3">
            <div className="profile-avatar">
              <Image
                src={DummyImage}
                classes="card-img"
              />
            </div>
          </div>
          <div className="col-md-9 p-2">
            <div className="card-body">
              <h6 className="card-title">{this.props.name}</h6>
              {/* <p className="card-text">{this.props.email}</p> */}
              {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
              <p className="card-text"><small className="text-muted">{this.props.email}</small></p>
            </div>
            <div className="card-stats">
              <div className="col-md-7 stats-array">
                <NumberIndicator number={this.props.total} title="Books" />
                <NumberIndicator number={this.props.exchange} title="Exchanges" />
                <NumberIndicator number={this.props.wishlist} title="Wishlist" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state.auth;
  return {
    user
  }
}

export default connect(null, {
  getUsersList
})(ActiveUsersItem);