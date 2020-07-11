import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const Snackbar = (props) => props.visible && <div className="snackbar">{props.message}</div>

Snackbar.propTypes = {
    visible: PropTypes.string.isRequired,
    message:PropTypes.string.isRequired,
}


const mapStateToProps = state => ({
    message: state.snackbar_message.message,
    visible: state.snackbar_message.visible,
  });

export default connect(
    mapStateToProps ,
    null
    )(Snackbar) ;

