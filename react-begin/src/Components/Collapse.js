// Firstly constructor --> state initialization
//render function runs firstly
// onClick Event runs
//setState state object updated --> triggered render
//upto-date JSX displayed by render function 

/* //LifeCycles methods
  componentDidMount  //sayesinde biz o uygulamının ayağa kalktı/oluşturuldu
  componentDidUpdate // güncelleme olduğu zaman çalışır 
  componentWillUnmount // silindiği zaman


*/

import React from "react";
import PropTypes from "prop-types";
class Collapse extends React.Component {
    state = {
        showContent: false,
      };

  toggleShowContent=()=>{
     // console.log(this);
      this.setState({showContent:!this.state.showContent});
  }

  componentDidMount(){
      console.log("Component created");
  }
  componentDidUpdate(){
      console.log("Component updated");
  }


  render() {

    return (
      <div>
        <p >
          <button onClick={this.toggleShowContent } className="btn btn-primary w-100">{this.props.children.props.cardTitle}{" & "}
          {React.Children.map(this.props.children,children=>children.props.cardTitle)}
          </button>
        </p>
        {
            this.state.showContent?( <div className="collapse show">
            {this.props.children}
            {React.Children.map(this.props.children,children=>children)}
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
