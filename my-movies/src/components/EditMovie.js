import React, { Component } from "react";
import axios from "axios";
export class EditMovie extends Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    //console.log(id);
    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    //console.log(response.data);
    const movie = response.data;
    this.setState({
      name: response.data.name, //movie.name
      rating: response.data.rating,
      overview: response.data.overview,
      imageURL: response.data.imageURL,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    /*
    --getting updated state data's with oldschool way
    const name = this.state.name;
    const rating = this.state.rating;
    const overview = this.state.overview;
    const imageURL= this.state.imageURL;
    */
   //getting updated state data's with object destructing
   const {name,rating,overview,imageURL} = this.state;

   const id = this.props.match.params.id;

   const updatedMovie = {
       name,
       rating,
       overview,
       imageURL,
   };

   this.props.onEditMovie(id,updatedMovie);
   this.props.history.push("/");

  };

  onInputChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit} className="mt-5">
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Edit The Form To Update A Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input
                onChange={this.onInputChange}
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                onChange={this.onInputChange}
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                onChange={this.onInputChange}
                type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageURL}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                onChange={this.onInputChange}
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-warning btn-block"
            value="Edit Movie"
          />
        </form>
      </div>
    );
  }
}

export default EditMovie;
