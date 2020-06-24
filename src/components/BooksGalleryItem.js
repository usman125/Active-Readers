import React, { Component } from 'react';
import { Image, Button } from './common';
import { connect } from 'react-redux';

import { FaRegStar, FaStar } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";
import { BsFillBookmarkFill, BsHeartFill, BsHeart } from "react-icons/bs";

class BooksGalleryItem extends Component {

  componentDidMount() {
    console.log("IS SELCTED:--", this.props.isSelected);
  }

  render() {
    return (
      <div className="col-md-3 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="book-body">
              <div className="book-img">
                <Image
                  classes="card-img-top"
                  src="https://www.stephanielandsem.com/wp-content/plugins/mybooktable/images/book-placeholder-large.jpg"
                />
                {!this.props.reading && !this.props.exchange ?
                  <div className="wishlist-img">
                    {
                      this.props.wishlist ?
                        <Button
                          classes="btn btn-dark"
                          onClick={this.props.toggleWishlist}
                        >
                          <TiHeartFullOutline size="20" />
                        </Button>
                        :
                        <Button
                          classes="btn btn-dark"
                          onClick={this.props.toggleWishlist}
                        >
                          <TiHeartOutline size="20" />
                        </Button>
                    }
                  </div> : null
                }
              </div>
              <div className="book-info mb-3">
                <h6 className="card-title mb-0">{this.props.name}</h6>
                <p className="card-text">{this.props.author}</p>
                <p className="card-text">{this.props.publish}</p>
              </div>
              <div className="mb-2">
                <Button
                  classes={this.props.exchange ? "btn btn-danger" : "btn btn-warning"}
                  onClick={this.props.toggleExchange}
                  disabled={this.props.wishlist}
                >
                  {this.props.exchange ?
                    <span>Close Exchange</span> :
                    <span>Offer Exchange</span>
                  }
                </Button>
              </div>
              <div className="mb-2">
                {this.props.reading ?
                  <Button
                    onClick={this.props.toggleCompleted}
                    classes="btn btn-success"
                  >
                    Mark Completed
                  </Button>
                  :
                  <Button
                    onClick={this.props.toggleReading}
                    classes="btn btn-primary"
                    disabled={this.props.wishlist}
                  >
                    Mark Reading
                  </Button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: state.booksGallery.booksIds.indexOf(ownProps._id) < 0 ? false : true
  }
}

export default connect(mapStateToProps, {

})(BooksGalleryItem);