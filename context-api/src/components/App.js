import React, { Component } from "react";
import BookList from "../components/BookList";
import BookContextProvider from "../contexts/BookContext";
class App extends Component {
  render() {
    return (
      <div>
        <BookContextProvider>
          <BookList></BookList>
        </BookContextProvider>
      </div>
    );
  }
}
export default App;
