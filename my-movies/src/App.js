import React from "react";
import SearchBar from "./components/Searchbar";
import MovieList from "./components/MovieList";
import axios from "axios";

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
    const baseURL2 =
      "https://api.themoviedb.org/3/movie/popular?api_key=be648c4ef3e4af3bbc4724bed8331819&language=en-US&page=1";

    /* 
      const response = await axios.get(baseURL);
      console.log(response);
      this.setState({movies:response.data});
     */
    const response2 = await axios.get(baseURL2);
    console.log(response2.data);
    //this.setState({movies:response2.data});
    this.setState({movies:response2.data.results});
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

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SearchBar searchMovieProp={this.searchMovie}></SearchBar>
            </div>
          </div>
          <MovieList
            movies={filteredMovies}
            deleteMovieProp={this.deleteMovie}
          ></MovieList>
        </div>
      </div>
    );
  }
}
export default App;
