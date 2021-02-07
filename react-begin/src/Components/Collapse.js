// Firstly constructor --> state initialization
//render function runs firstly
// onClick Event runs
//setState state object updated --> triggered render
//upto-date JSX displayed by render function 


import React from "react";
import PropTypes from "prop-types";
class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
    /*
    this.showMore=()=>{
        console.log("asd");
    }
    */

    this.showMore = this.showMore.bind(this);
  }

  showMore=()=>{
    console.log("showMore");
    this.setState({showContent:true});
}

  toggleShowContent=()=>{
    console.log("toggleShowContent");

      console.log(this);
      this.setState({showContent:!this.state.showContent});
  

      /*  wrong using. When this.state is assigned again render function will not be triggered so we have to use setState function to re-assign state variables.
        this.state={
          showContent:true
      }
      */
  }

  render() {

    return (
      <div>
        <p >
          <button onClick={this.toggleShowContent } className="btn btn-primary w-100">Link with href</button>
        </p>
        {
            this.state.showContent?( <div className="collapse show">
            {this.props.children}
            {this.state.showContent}
          </div>):null
        }
       
      </div>
    );
  }
}

Collapse.defaultProps = {};
/*
Collapse.propTypes={
    //xx:PropTypes.bool,
}
*/

export default Collapse;
