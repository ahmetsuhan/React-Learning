import React, { Component } from 'react'

export class Book extends Component {
    render() {
        //console.log(this.props.book);
        return (
            <div>
                <h2>{this.props.book.title}</h2>
                <h4>{this.props.book.author}</h4>
              <img src = {this.props.book.imageURL}></img>
            </div>
        )
    }
}

export default Book
