import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import Search from './Search';
import './App.css';

// TODO: get all books from server
class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
  };
  componentDidMount() {
    return BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  onChangeBookShelf = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf).then((books) => {
      books = [].concat(books.currentlyReading, books.wantToRead, books.read);

      this.setState((state) => {
        let bookToUpdate = state.books.find((b) => bookId === b.id);
        if (!bookToUpdate) {
          state.books.push(bookId)
          bookToUpdate = bookId
        }
        bookToUpdate.shelf = shelf;

        books.state = books.map((bId) =>
          state.books.find((book) => book.id === bId),
        );
        return state;
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => {
            return (
              <Search
                books={this.state.books}
                onChangeBookShelf={this.onChangeBookShelf}
              />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <BookList
                books={this.state.books}
                onChangeBookShelf={this.onChangeBookShelf}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default BooksApp;
