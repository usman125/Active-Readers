import React, { Component } from 'react';
import AddBookForm from "./AddBookForm";
import { connect } from 'react-redux';
import BooksGalleryItem from "./BooksGalleryItem";
import {
  getBookList,
  toggleExchange,
  toggleReading,
  toggleCompleted,
  toggleWishlist
} from "../actions";
// import {
//   useParams
// } from "react-router-dom";

// const search = window.location.search;
// const params = new URLSearchParams(search);
// const foo = params.get('bar');

class BooksGallery extends Component {

  componentDidMount() {
    this.props.getBookList(this.props.user._id);
    // let city = (new URLSearchParams(window.location.search)).get("city");
    // console.log(city);
    // console.log(this.props.location.query);
  }

  toggleExchange = (book) => {
    console.log("TOGGLE EXCHANGE:--", book);
    this.props.toggleExchange(book);
  }

  toggleCompleted = (book) => {
    console.log("TOGGLE COMPLTED:--", book);
    this.props.toggleCompleted(book);
  }

  toggleReading = (book) => {
    console.log("TOGGLE READING:--", book);
    this.props.toggleReading(book);
  }

  toggleWishlist = (book) => {
    console.log("TOGGLE READING:--", book);
    this.props.toggleWishlist(book);
  }

  renderBooks = () => {
    return (
      <div className="row">
        {
          this.props.books.map((c) => {
            return (
              <BooksGalleryItem
                _id={c._id}
                key={c._id}
                name={c.name}
                publish={c.publish}
                author={c.author}
                reading={c.reading}
                exchange={c.exchange}
                completed={c.completed}
                wishlist={c.wishlist}
                toggleExchange={() => this.toggleExchange(c)}
                toggleCompleted={() => this.toggleCompleted(c)}
                toggleReading={() => this.toggleReading(c)}
                toggleWishlist={() => this.toggleWishlist(c)}
              />
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className="p-4">
        <AddBookForm />
        <div className="books-gallery mt-5">
          <h5>My Gallery</h5>
          {
            this.renderBooks()
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    books
  } = state.booksGallery;
  const {
    user
  } = state.auth;
  return {
    books,
    user
  }
}

export default connect(mapStateToProps, {
  getBookList,
  toggleExchange,
  toggleReading,
  toggleCompleted,
  toggleWishlist
})(BooksGallery);