import React, { Component } from "react";
import { connect } from "react-redux";

class Snackbar extends Component {
    render() {
        return this.props.visible && <div className="snackbar">{this.props.message}</div>
    }
}

const mapStateToProps = state => ({
    message: state.snackbar_message.message,
    visible: state.snackbar_message.visible,
  });

export default connect(
    mapStateToProps ,
    null
    )(Snackbar) ;

