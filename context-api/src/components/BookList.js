import React, { Component } from "react";
import Book from "./Book";
import './BookList.css';
import BookContext from '../contexts/BookContext';

class BookList extends Component {
  static contextType=BookContext;
  
  render() {
    //console.log(this.props);

    console.log(this.context);
    const books=this.context;
  

    return (
      <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Bookfolio</h2>
          <h3 className="section-subheading text-muted">lorem ipsum dolor</h3>
        </div>
        <div className="row">{books.map((book,index) => {
          return <Book book={book}
                        key ={index}
          ></Book>
        })}</div>
      </div>
    </section>
    )
  }
}
export default BookList;
