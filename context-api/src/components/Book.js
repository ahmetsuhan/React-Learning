import React, { Component } from 'react'
import './Book.css';
export class Book extends Component {
    render() {
        //console.log(this.props.book);
        return (
           <div className="col-lg-4 col-sm-6 mb-4">
               <div className="portfolio-item">
                    <a className="portfolio-link" dataToggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover" >
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.book.imageURL} alt=""></img>
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.book.title}</div>
                        <div className="portfolio-caption-sunheading text-muted" >{this.props.book.author}</div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Book
