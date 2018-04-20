import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  state = {
    books: this.props.books.filter((book) => {
      console.log(this.props);
      return book.shelf.toLowerCase() === this.props.title.toLowerCase();
    }),
  };
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.books.map((book) => {
              return (
                <li key={book.title}>
                  <Book
                    url={book.url}
                    author={book.author}
                    title={book.title}
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
