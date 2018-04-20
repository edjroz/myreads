import React from 'react';
import { Route, Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf';
import Search from './Search';
import './App.css';

// TODO: get all books from server
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [
      {
        url:
          'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
        author: 'Orson Scott Card',
        title: "Ender's Game",
        shelf: 'Currently Reading',
      },
      {
        url:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
        author: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        shelf: 'Currently Reading',
      },
      {
        url:
          'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api',
        author: 'J.K Rowling',
        title: "Harry potter and the Sorcerer's Stone",
        shelf: 'Want to Read',
      },
      {
        url:
          'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',

        author: 'David McCullough',
        title: '1776',
        shelf: 'Want to Read',
      },
      {
        url:
          'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
        author: 'J.R.R Tolkien',
        title: 'The Hobbit',
        shelf: 'Read',
      },
      {
        url:
          'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
        author: "Oh, the Places You'll go!",
        title: 'Seuss',
        shelf: 'Read',
      },
    ],
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => {
            return <Search />;
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Bookshelf
                      title="Currently Reading"
                      books={this.state.books}
                    />
                    <Bookshelf title="Want To Read" books={this.state.books} />
                    <Bookshelf title="Read" books={this.state.books} />
                  </div>
                </div>
                <div className="open-search">
                  <Link className="open-search" to="/search">
                    Add a book
                  </Link>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default BooksApp;
