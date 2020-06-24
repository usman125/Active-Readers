import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            value={this.props.value}
            className="form-check-input"
            id="exampleCheck1"
            checked={this.props.isChecked}
            onChange={this.props.onChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            {this.props.label}
          </label>
        </div>
      </div>
    );
  }
}

export { Checkbox };