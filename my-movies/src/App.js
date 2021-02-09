import React from "react";
import SearchBar from "./components/Searchbar";
import MovieList from "./components/MovieList";
import axios from "axios";
import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//require('dotenv').config();

console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  /* 
    async componentDidMount(){
      const baseURL = "http://localhost:3002/movies";
      const response = await fetch(baseURL);
      //console.log(response);
      const data = await response.json();
      //console.log(data);
      this.setState({movies:data});
    }
   */

  //axios: http istekleri yapmak için kullanılan promise tabanlı bir library
  async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const baseURL2 = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const baseURL3 = `https://api.themoviedb.org/3/list/7076296?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

    const response = await axios.get(baseURL);
    console.log(response);
    this.setState({ movies: response.data });

    /*
    const response2 = await axios.get(baseURL2);
    console.log(response2.data);
    //this.setState({movies:response2.data});
    this.setState({movies:response2.data.results});
*/
  }

  /* 
    deleteMovie = (movie)=>{
      const newMovieList = this.state.movies.filter(
        m=>m.id !== movie.id
      );
    */

  //fetch api
  /* 
      deleteMovie = async (movie)=>{
        const baseURL = `http://localhost:3002/movies/${movie.id}`;
        await fetch(baseURL,{
          method:"DELETE"
        });
        const newMovieList = this.state.movies.filter(
          m=>m.id !== movie.id
        );
     //this.setState({movies:newMovieList});
     this.setState(state =>({
      movies:newMovieList
     }));
    }

*/

  //axios
  deleteMovie = async (movie) => {
    const baseURL = `http://localhost:3002/movies/${movie.id}`;

    axios.delete(baseURL);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    //this.setState({movies:newMovieList});
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    //console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };

  addMovie=async (movie)=>{
  await axios.post(`http://localhost:3002/movies/`,movie);
  this.setState(state => ({movies:state.movies.concat(movie)}));
  }

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie}></SearchBar>
                    </div>
                  </div>

                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  ></MovieList>
                </React.Fragment>
              )}
            ></Route>
            <Route path="/add-movie" ecact render={({history})=>(
              <AddMovie 
              onAddNewMovie={(movie) => {this.addMovie(movie)
                history.push("/")}
            }
              ></AddMovie>
            )}></Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
