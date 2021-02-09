import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 class searchBar extends Component {

   
    handleFormSubmit = (event)=>{
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-10">
                        <input 
                        onChange={this.props.searchMovieProp} 
                        type="text" className="form-control" 
                        placeholder="Search a movie"
                        ></input>
                    </div>
                    <div className="col-2">
                        <Link 
                        to="/add-movie"
                            type="button"
                            className="btn btn-warning btn-md"
                        >Add New Movie</Link>
                    </div>
                </div>
            </form>
        )
    }
}
export default searchBar;
