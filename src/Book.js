import React from 'react';
import propTypes from 'prop-types';

class Book extends React.Component {
  static propTypes = {
    book: propTypes.object.isRequired,
    onChangeBookShelf: propTypes.func.isRequired,
  };
  render() {
    const { onChangeBookShelf, book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={(e) => {
                if (onChangeBookShelf) {
                  onChangeBookShelf(book.id, e.target.value);
                }
              }}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    );
  }
}
export default Book;
