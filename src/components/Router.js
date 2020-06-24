import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
  useParams
} from "react-router-dom";
import {

} from "../actions";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ActiveUsers from "./ActiveUsers";
import BooksGallery from "./BooksGallery";
// import BooksGallery from "./BooksGallery";

// import {
//   FaHome,
//   FaUserAlt,
//   FaFileArchive,
//   FaSignOutAlt,
//   FaBookOpen
// } from 'react-icons/fa';
import { AppHeader } from './common';

class Routes extends Component {
  renderContent = () => {
    if (this.props.user === null) {
      return (
        <div className="main-container">
          <Router>
            {/* <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">
                  <FaBookOpen size="25" />&nbsp;&nbsp;Readers
                </h5>
                <nav className="my-2 my-md-0 mr-md-3">
                  <Link className="p-2 text-dark" to="/">Login</Link>
                </nav>
                <Link className="btn btn-outline-primary" to="/register">Register</Link>
              </div> */}
            <AppHeader />
            <Switch>
              <Route path="/register" component={Register} />
              {/* <Route path="/gallery/:userId" component={ActiveUsers} children={Child} /> */}
              <Route path="/" component={Login} />
            </Switch>
          </Router>
        </div>
      );
    }
    return (
      <div className="main-container">
        <Router>
          <AppHeader />
          {/* <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
              <h5 className="my-0 mr-md-auto font-weight-normal">
                <FaBookOpen size="25" />&nbsp;&nbsp;Readers
              </h5>
              <nav className="my-2 my-md-0 mr-md-3 custom-nav">
                <Link className="nav-link p-2 text-dark" to="/home">
                  <FaHome />
                  <span className="ml-2">
                    Home
                  </span>
                </Link>
                <Link className="nav-link p-2 text-dark" to="/BooksGallery">
                  <FaFileArchive />
                  <span className="ml-2">
                    BooksGallery
                  </span>
                </Link>
                <Link className="nav-link p-2 text-dark" to="/activeusers">
                  <FaUserAlt />
                  <span className="ml-2">
                    Active Users
                  </span>
                </Link>
                <Link className="nav-link p-2 text-dark" to="/activeusers">
                  <FaSignOutAlt />
                  <span className="ml-2">
                    Logout
                  </span>
                </Link>
              </nav>
            </div> */}
          <Switch>
            <Route path="/home" initial component={Home} />
            <Route path="/activeusers" component={ActiveUsers} />
            <Route path="/booksgallery" component={BooksGallery} />
            {/* <Route path="/gallery/:userId" children={<Child />} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
  render() {
    return (
      this.renderContent()
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state.auth;
  return { user };
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { userId } = useParams();

  return (
    <div>
      <h3>ID: {userId}</h3>
      <ActiveUsers />
    </div>
  );
}

export default connect(mapStateToProps, {})(Routes);