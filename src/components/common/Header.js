import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaFileArchive,
  FaSignOutAlt,
  FaBookOpen
} from 'react-icons/fa';
import { connect } from 'react-redux';
import { Button } from './Button';
import {
  setLoggedUser
} from "../../actions";

class Header extends Component {

  renderContent = () => {
    if (this.props.user === null) {
      return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">
            <FaBookOpen size="25" />&nbsp;&nbsp;Readers
                </h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/">Login</Link>
            {/* <Link className="btn btn-outline-primary" to="/gallery/3">Active Reader</Link> */}
          </nav>
          <Link className="btn btn-outline-primary" to="/register">Register</Link>
        </div>
      );
    }
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <FaBookOpen size="25" />&nbsp;&nbsp;Readers
              </h5>
        <nav className="my-2 my-md-0 mr-md-3 custom-nav">
          <Link className="nav-link p-2 text-dark" to="/home">
            <FaHome />
            <span className="ml-1">
              Home
                  </span>
          </Link>
          <Link className="nav-link p-2 text-dark" to="/BooksGallery">
            <FaFileArchive />
            <span className="ml-1">
              BooksGallery
                  </span>
          </Link>
          <Link className="nav-link p-2 text-dark" to="/activeusers">
            <FaUserAlt />
            <span className="ml-1">
              Active Users
                  </span>
          </Link>
          <div className="ml-2">
            <Button
              onClick={() => this.props.setLoggedUser({ user: null, authToken: null })}
              classes="btn btn-outline-danger"
            >
              <FaSignOutAlt /> Logout
            </Button>
          </div>
        </nav>
      </div>
    );
  }

  render() {
    return (
      this.renderContent()
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.auth;
  return { user };
}

const AppHeader = connect(mapStateToProps, {
  setLoggedUser
})(Header);

export { AppHeader };