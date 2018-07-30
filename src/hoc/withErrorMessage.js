import React from "react";

const withErrorMessage = (Component)=> {
    return class extends React.Component {
        render() {
           return  <Component {...this.props}>
                        { this.props.error && <div>{this.props.error}</div>}
                   </Component>
           
        };
    }
  
};

export default withErrorMessage;