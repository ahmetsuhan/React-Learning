import React from "react";
import PropTypes from "prop-types";
class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
    };


  }

  render() {

    return (
      <div>
        <p >
          <a  className="btn btn-primary w-100">Link with href</a>
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
