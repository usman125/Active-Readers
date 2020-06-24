import React, { Component } from 'react';
import NumberIndicator from './NumberIndicator';
import { connect } from 'react-redux';

class ProfileStats extends Component {
  render() {
    const { total, wishlist, exchange } = this.props;
    return (
      <div className="stats-array">
        <NumberIndicator number={total} title="Books" />
        <NumberIndicator number={exchange} title="Exchanges" />
        <NumberIndicator number={wishlist} title="Wishlist" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { total, wishlist, exchange } = state.home.bookStats;
  return { total, wishlist, exchange }
}

export default connect(mapStateToProps, {

})(ProfileStats);