import React from "react";
import MaterialIcon from 'material-icons-react';
import { Link  } from 'react-router-dom';

const NewsFeederSettingIcon = props => (
    <Link className="pointer" to={props.goTo}><MaterialIcon onClick={props.onIconClicked} icon={props.icon}  color='#FFF' /></Link>
);

export default NewsFeederSettingIcon;