import React, { Component } from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  // static contextType=BookContext;

  render(){
    //console.log(this.props);

    //console.log(this.context);
    //const books=this.context;

    return (
      <ThemeContext.Consumer>
        {(contextTheme) =>(
          <BookContext.Consumer>
          {(contextBook) => {

            const {books} = contextBook;
            const {isDarkTheme,dark,light} = contextTheme;
            const theme = isDarkTheme?dark:light;
          
            return (
              <section className="page-section" style={{background:theme.bg, color:theme.txt}} id="portfolio">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                      Bookfolio
                    </h2>
                    <h3 className="section-subheading text-muted">
                      lorem ipsum dolor
                    </h3>
                  </div>
                  <div className="row">
                    {books.map((book, index) => {
                      return <Book book={book} key={index}></Book>;
                    })}
                  </div>
                </div>
              </section>
            );
          }}
        </BookContext.Consumer>
        ) }
        
      </ThemeContext.Consumer>
    );
  }
}
export default BookList;
