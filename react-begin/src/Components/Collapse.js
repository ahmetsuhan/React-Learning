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
