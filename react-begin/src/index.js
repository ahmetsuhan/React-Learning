import React from 'react';
import ReactDOM from 'react-dom';

function App(){

return <h1>Hello world</h1>
}

class App2 extends React.Component{

render(){
  return  <h1>Hello world</h1>
}

}

ReactDOM.render(
  <App2></App2>,
  document.getElementById("root")
);