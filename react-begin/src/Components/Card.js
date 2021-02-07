import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
        </div>
        <div className="card-pfooter">
          <small className="text-muted">{this.props.updatedTime}</small>
        </div>
      </div>
    );
  }
}
 Card.defaultProps ={
  cardTitle:'Default Card Title'
 }
export default Card;

/* 
const Test =()=>{
    console.log("TEst First Class");
}
Test();
*/
