import React, { Component } from 'react'
import Book from './Book';
 class BookList extends Component {

    render() {

        //console.log(this.props);

        const bookList = this.props.books.map((book,index) => {
            return <Book book={book} key={index}></Book>
        } );
        
        return (
            <div>
                {bookList}
            </div>
        )
    }
}
export default BookList;
