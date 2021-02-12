import React, { Component } from "react";
import BookList from "../components/BookList";
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";
class App extends Component {
  render() {
    return (
        <ThemeContextProvider>
          <BookContextProvider>
            <BookList></BookList>
          </BookContextProvider>
        </ThemeContextProvider>
    );
  }
}
export default App;
