import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from './Book';
import * as BookAPI from '../BooksAPI';

class Search extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onChangeBookShelf: propTypes.func.isRequired,
  };
  state = {
    searchResult: [],
    error: null,
  };

  search = (query) => {
    if (query) {
      BookAPI.search(query).then((books) => {
        if (!Array.isArray(books)) {
          this.setState({
            searchResult: [],
          });
          return;
        }
        this.setState({
          searchResult: books.map((book) => {
            const bookFounded = this.props.books.find((b) => b.id === book.id);
            if (bookFounded) {
              book.shelf = bookFounded.shelf;
            } else {
              book.shelf = 'none';
            }

            return book;
          }),
        });
      });
    }
  };
  onChangeBookShelf = (bookId, shelf) => {
    const found = this.state.searchResult.find((b) => bookId === b.id);
    this.setState((state) => ({
      searchResult: state.searchResult.map((b) => {
        if (b.id === bookId) {
          b.shelf = shelf;
        }
        return b;
      }),
    }));
    this.props.onChangeBookShelf(found, shelf);
  };
  componentDidMount() {
    document.querySelector('#search').focus();
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              id="search"
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => {
                this.search(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResult.length > 0 &&
              this.state.searchResult.map((book, index) => (
                <li key={index}>
                  <Book
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    thumbnail={(book.imageLinks || {}).thumbnail}
                    shelf={book.shelf}
                    onChangeBookShelf={this.onChangeBookShelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
