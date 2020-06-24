import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { type, onClick, children, classes, disabled } = this.props;
    return (
      <button className={classes}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    );
  }
}

export { Button };