import React, { Component } from 'react'

 class searchBar extends Component {

    state={
        searchQuery:""
    }
    handleFormSubmit = (event)=>{
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                        onChange={(event)=> this.setState({searchQuery:event.target.value})} 
                        type="text" className="form-control" 
                        placeholder="Search a movie"
                        value={this.state.searchQuery}></input>
                    </div>
                </div>
            </form>
        )
    }
}
export default searchBar;
