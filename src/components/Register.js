import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from "./common";

import {
  registerInputChanged,
  setUserLocation,
  registerUser
} from "../actions";

import {
  FaSave,
} from 'react-icons/fa';
import GoogleMap from "./GoogleMap";

class Register extends Component {

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log("POSTION OBJECT:--", position);
        var location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
        this.props.setUserLocation(location);
      },
      err => {
        console.log("POSTION OBJECT:--", err)
      }
    );
  }

  registerUser = () => {
    const {
      name,
      email,
      password,
      dob,
      contact,
      avatar,
      location,
      registerUser
    } = this.props;
    var newUser = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      contact: contact,
      avatar: avatar,
      location: location,
    }
    console.log("CONSOLE USER TO SAVE:--", newUser);
    registerUser(newUser);
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
        onClick={this.registerUser}
        classes="btn btn-primary"
      >
        <FaSave className="mr-2" /> Register
      </Button>
    );
  }


  render() {
    const {
      name,
      email,
      password,
      dob,
      contact,
      registerInputChanged
    } = this.props;

    return (
      <div className="container">
        <h4>Register</h4>
        <div>
          <Input
            type="text"
            placeholder="name"
            value={name}
            onChange={value => registerInputChanged({ prop: 'name', value: value.target.value })}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={value => registerInputChanged({ prop: 'email', value: value.target.value })}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={value => registerInputChanged({ prop: 'password', value: value.target.value })}
          />
        </div>
        <div>
          <Input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={value => registerInputChanged({ prop: 'dob', value: value.target.value })}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Contact Number"
            value={contact}
            onChange={value => registerInputChanged({ prop: 'contact', value: value.target.value })}
          />
        </div>
        <div>
          {
            this.props.errMsg ? this.props.errMsg : null
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
  const { loading,
    name,
    email,
    password,
    dob,
    contact,
    avatar,
    location,
    errMsg
  } = state.register;
  return {
    loading,
    name,
    email,
    password,
    dob,
    contact,
    avatar,
    location,
    errMsg,
    center: {
      lat: location.latitude,
      lng: location.longitude
    },
    zoom: 11
  };
}

export default connect(mapStateToProps, {
  registerInputChanged,
  setUserLocation,
  registerUser
})(Register);