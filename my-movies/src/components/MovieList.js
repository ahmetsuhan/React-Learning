import React from "react";
import {Link} from 'react-router-dom';


const MovieList = (props) => {
  const truncatedStringLenght = 75;
  const truncateOverview = (string, maxLenght) => {
    if (!string) return null;
    if (string.lenght <= maxLenght) return string;
    return `${string.substring(0, maxLenght)} ...`;
  };

  return (
    <div>
      <div className="row">
        {props.movies.map((movie, i) => (
          <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img
                src={`${movie.imageURL}`}
                className="card-img-top"
                alt="sample movie"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {truncateOverview(movie.overview, truncatedStringLenght)}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    onClick={(event) => props.deleteMovieProp(movie)}
                    type="button"
                    className="btn btn-md btn-outline-danger"
                  >
                    Delete
                  </button>
                <Link type="button" className="btn btn-md btn-outline-secondary"
                to={`edit/${movie.id}`}
                
                >Edit</Link>
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
