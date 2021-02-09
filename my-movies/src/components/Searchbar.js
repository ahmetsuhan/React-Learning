import React, { Component } from 'react'

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
                        <button className="btn btn-md btn-warning" >Add Movie</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default searchBar;
