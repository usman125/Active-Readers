import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { src, classes } = this.props;
    return (
      <img
        className={classes}
        src={src}
        alt=""
      />
    );
  }
}

export { Image };