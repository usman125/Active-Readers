import React, { Component } from 'react';

class NumberIndicator extends Component {
  render() {
    return (
      <div className="number-indicator">
        <span className="name">{this.props.number}</span>
        <span className="title">{this.props.title}</span>
      </div>
    );
  }
}

export default NumberIndicator;