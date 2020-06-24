import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersList,
  clearUserList
} from "../actions";
import ActiveUsersItem from "./ActiveUsersItem";

class ActiveUsers extends Component {

  componentDidMount() {
    this.props.getUsersList(this.props.user._id);
  }

  renderUsers = () => {
    return (
      this.props.users.map((c) => {
        return (
          <ActiveUsersItem
            key={c._id}
            name={c.name}
            email={c.email}
            total={c.total}
            exchange={c.exchange}
            wishlist={c.wishlist}
          />
        );
      })
    );
  }

  componentWillUnmount() {
    // this.props.clearUserList();
  }

  render() {
    return (
      <div className="user-container p-4">
        {
          this.renderUsers()
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state.users;
  const { user } = state.auth;
  return {
    users,
    user
  }
}

export default connect(mapStateToProps, {
  getUsersList,
  clearUserList
})(ActiveUsers);