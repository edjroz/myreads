import React from 'react';
import propTypes from 'prop-types';

const defaultImage =
  'https://rafver.is/wp-content/uploads/2016/05/no-image.jpg';

class Book extends React.Component {
  static propTypes = {
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    onChangeBookShelf: propTypes.func.isRequired,
    authors: propTypes.array,
    shelf: propTypes.string,
    thumbnail: propTypes.string,
  };

  render() {
    const {
      id,
      title,
      authors,
      shelf,
      thumbnail,
      onChangeBookShelf,
    } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${thumbnail || defaultImage}")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={(e) => {
                if (onChangeBookShelf) {
                  onChangeBookShelf(id, e.target.value);
                }
              }}
            >
              <option value="" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {(authors || []).map((author, idx) => <div key={idx}>{author}</div>)}
        </div>
      </div>
    );
  }
}
export default Book;
