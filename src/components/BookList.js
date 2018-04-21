import React from 'react';
import propTypes from 'prop-types';
import BookShelf from './Bookshelf';
import { Link } from 'react-router-dom';

class BookList extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onChangeBookShelf: propTypes.func.isRequired,
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              onChangeBookShelf={this.props.onChangeBookShelf}
              title="Currently Reading"
              books={this.props.books.filter(
                (b) => b.shelf === 'currentlyReading',
              )}
            />
            <BookShelf
              onChangeBookShelf={this.props.onChangeBookShelf}
              title="Want To Read"
              books={this.props.books.filter((b) => b.shelf === 'wantToRead')}
            />
            <BookShelf
              onChangeBookShelf={this.props.onChangeBookShelf}
              title="Read"
              books={this.props.books.filter((b) => b.shelf === 'read')}
            />
          </div>
        </div>
        <div className="open-search">
          <Link className="open-search" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BookList;
