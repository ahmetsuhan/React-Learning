import React from "react";

const MovieList = (props) => {


  return (
    <div>
      <div className="row">
        {props.movies.map((movie,i) => (
          <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img
                src={`${movie.imageURL}`}
                className="card-img-top"
                alt="sample movie"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button onClick={(event) => props.deleteMovieProp(movie)}
                    type="button"
                    className="btn btn-md btn-outline-danger"
                  >
                    Delete
                  </button>
                  <h2>
                    <span className="badge bg-info">{movie.rating}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
