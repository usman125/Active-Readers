import React, { Component } from 'react';
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";

class CoverImage extends Component {
  render() {
    return (
      <div className="cover-img">
        <div className="cover-top">
          <div className="user-block">
            <div className="user-stats">
              <ProfileInfo />
              <ProfileStats />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoverImage;