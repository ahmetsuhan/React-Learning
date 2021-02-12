import React, { Component } from "react";
import Book from "./Book";
import './BookList.css';
class BookList extends Component {
  render() {
    //console.log(this.props);

    const bookList = this.props.books.map((book, index) => {
      return <Book book={book} key={index}></Book>;
    });

    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Bookfolio</h2>
            <h3 className="section-subheading text-muted">lorem ipsum dolor</h3>
          </div>
          <div className="row">{bookList}</div>
        </div>
      </section>
    );
  }
}
export default BookList;
