import React from "react";
import ReactDOM from "react-dom";
import Card from './Components/Card';

const App = () => {
  return (
    <div>
      <div className="card-group">

       <Card carTitle="asdasdasd"></Card>
       <Card carTitle="asd"></Card>
       <Card carTitle="asd"></Card>
      </div>

    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
