import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  inputChanged,
  loginUser
} from "../actions";
import { Input, Button } from "./common";
import {
  FaSignInAlt,
} from 'react-icons/fa';

class Login extends Component {

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log("POSTION OBJECT:--", position);
      },
      err => {
        console.log("POSTION OBJECT:--", err)
      }
    );
    this.props.history.push('/');
  }

  loginUser = () => {
    const { email, password, loginUser } = this.props;
    var user = {
      email: email,
      password: password
    }
    loginUser(user);
  }

  renderButton = () => {
    if (this.props.loading) {
      return (
        <div>
          <h5>Loading ...</h5>
        </div>
      );
    }
    return (
      <Button
        onClick={this.loginUser}
        classes="btn btn-primary"
      >
        <FaSignInAlt className="mr-2" />
            Login
      </Button>
    );
  }


  render() {
    const { email, password, inputChanged } = this.props;
    return (
      <div className="container">
        <h4>Please Login</h4>
        <div>
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={value => inputChanged({ prop: 'email', value: value.target.value })}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={value => inputChanged({ prop: 'password', value: value.target.value })}
          />
        </div>
        <div className="mb-2">
          {
            this.props.errorMsg ? this.props.errorMsg : null
          }
        </div>
        <div>
          {
            this.renderButton()
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, errorMsg, email, password, redirect } = state.login;
  return { loading, errorMsg, email, password, redirect };
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    loginUser: params => dispatch(loginUser(params, ownProps)),
    inputChanged: ({ prop, value }) => dispatch(inputChanged({ prop, value })),
  };
};

export default connect(mapStateToProps, mapDispatch)(Login);