import React, { Component } from 'react';
import CoverImage from "./CoverImage";
import { connect } from 'react-redux';
import {
  getBookStats
} from "../actions";

class Home extends Component {

  componentDidMount() {
    this.props.getBookStats(this.props.user._id);
  }

  render() {
    return (
      <div className="pb-4 pl-4 pr-4 pt-0">
        <CoverImage />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.auth;
  return {
    user
  };
}

export default connect(mapStateToProps, {
  getBookStats
})(Home);