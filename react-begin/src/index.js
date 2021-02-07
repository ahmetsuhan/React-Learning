import React from "react";
import ReactDOM from "react-dom";
import Card from "./Components/Card";
import Collapse from "./Components/Collapse";

const App = () => {
  return (
    <div>
      <div className="card-group">
        <Collapse href="collapseExample1">
          <Card
            cardTitle="Card Title1"
            cardText="Lorem Ipsum Text 1"
            updatedTime="Last Updated 1min ago"
            image="https://picsum.photos/id/1/200/300"
          ></Card>
        </Collapse>
        <Collapse href="collapseExample2">
          <Card
            cardTitle="Card Title2"
            cardText="Lorem Ipsum Text 2"
            updatedTime="Last Updated 2mins ago"
            image="https://picsum.photos/id/10/200/300"
          ></Card>
        </Collapse>
        <Collapse href="collapseExample3">
          <Card
            cardTitle="Card Title3"
            cardText="Lorem Ipsum Text 3"
            updatedTime="Last Updated 3mins ago"
            image="https://picsum.photos/id/100/200/300"
          ></Card>
        </Collapse>
      </div>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
