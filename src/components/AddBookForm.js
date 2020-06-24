import React, { Component } from 'react';
import { Input, Button, Checkbox } from './common';
import { connect } from 'react-redux';
import {
  addBookInputChanged,
  addBook,
  addBookLoader,
  addBookFailure,
  addBookWishlistChange
} from "../actions";

import { FaPlus } from "react-icons/fa";

class AddBookForm extends Component {

  addBook = () => {
    const { name, author, publish, addBook, addBookLoader, addBookFailure } = this.props;
    var newBook = {
      name,
      author,
      publish,
      userRef: this.props.user._id
    }
    console.log(newBook);
    if (name !== '' && author !== '' && publish !== '') {
      addBookLoader();
      addBook(newBook)
    } else {
      addBookFailure();
    }
  }

  addBookWishlistChange = ($event) => {
    this.props.addBookWishlistChange();
  }

  renderButton = () => {
    if (this.props.loading) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <Button
          onClick={this.addBook}
          classes="btn btn-primary"
        >
          <FaPlus className="mr-2" />
          Add new
        </Button>
      </div>
    );
  }

  render() {
    const { name, author, publish } = this.props;
    return (
      <div className="addbook-form">
        <h5>Raise book shelf</h5>
        <Input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={($event) => this.props.addBookInputChanged({ prop: 'name', value: $event.target.value })}
        />
        <Input
          type="text"
          placeholder="Author"
          value={author}
          onChange={($event) => this.props.addBookInputChanged({ prop: 'author', value: $event.target.value })}
        />
        <Input
          type="text"
          placeholder="Publish Year"
          value={publish}
          onChange={($event) => this.props.addBookInputChanged({ prop: 'publish', value: $event.target.value })}
        />
        <Checkbox
          label="Add to wishlist"
          value={this.props.wishlist}
          onChange={this.addBookWishlistChange}
        />
        <div>
          {
            this.props.errorMsg ? this.props.errorMsg : null
          }
        </div>
        {
          this.renderButton()
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    loading,
    name,
    publish,
    author,
    errorMsg,
    wishlist,
  } = state.addBookForm;
  const {
    user
  } = state.auth;
  return {
    loading,
    name,
    publish,
    author,
    errorMsg,
    wishlist,
    user
  }
}

export default connect(mapStateToProps, {
  addBookInputChanged,
  addBook,
  addBookLoader,
  addBookFailure,
  addBookWishlistChange
})(AddBookForm);