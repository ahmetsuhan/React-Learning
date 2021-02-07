import React from "react";

class Collapse extends React.Component {
//console.log(props.children);

render(){
    return (
        <div>
          <p>
            <a
              className="btn btn-primary w-100"
              data-bs-toggle="collapse"
              href={"#".concat(this.props.href)}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
           
          </p>
          <div className="collapse show" id={this.props.href}>
            {this.props.children}
          </div>
        </div>
      );
}
 
};

export default Collapse;
