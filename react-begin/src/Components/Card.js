import React from 'react'


const Card = (props) => {
console.log(props);
    return (
            <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.carTitle}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
    )
}

export default Card;

/* 
const Test =()=>{
    console.log("TEst First Class");
}
Test();
*/