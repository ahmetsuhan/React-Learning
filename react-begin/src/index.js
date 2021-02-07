import React from "react";
import ReactDOM from "react-dom";
import Card from './Components/Card';

const App = () => {
  return (
    <div>
      <div className="card-group">

       <Card cardTitle="Card Title1" cardText="Lorem Ipsum Text 1" updatedTime="Last Updated 1min ago"></Card>
       <Card cardTitle="Card Title3" cardText="Lorem Ipsum Text 2" updatedTime="Last Updated 2mins ago"></Card>
       <Card cardTitle="Card Title2" cardText="Lorem Ipsum Text 3" updatedTime="Last Updated 3mins ago"></Card>
      </div>

    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
