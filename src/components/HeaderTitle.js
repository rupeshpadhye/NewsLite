import React from "react";
import PropTypes from 'prop-types';

const HeaderTitile = (props) => (<div className='header-title'>{props.header}</div>);

HeaderTitile.propTypes = {
    header: PropTypes.string.isRequired
  };

export default HeaderTitile;