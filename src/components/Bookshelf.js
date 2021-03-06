import React from 'react';
import propTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onChangeBookShelf: propTypes.func.isRequired,
  };
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => {
              return (
                <li key={book.title}>
                  <Book
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    thumbnail={(book.imageLinks || {}).thumbnail}
                    shelf={book.shelf}
                    onChangeBookShelf={this.props.onChangeBookShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default Bookshelf;
