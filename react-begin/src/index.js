import React from 'react';
import ReactDOM from 'react-dom';


//JSX 
const names=["Ahmet Suhan","Ömer Faruk","Feyza"];

function App(){
return (
  <div>
 {names.map(name => (<h1>{name}</h1>))}
      
    </div>
);

}

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);