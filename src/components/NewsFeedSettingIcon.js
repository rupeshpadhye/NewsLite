import React from "react";
import MaterialIcon from 'material-icons-react';

const NewsFeederSettingIcon = props => (
    <span className="pointer"><MaterialIcon onClick={props.onIconClicked} icon={props.icon}  color='#FFF' /></span>
);

export default NewsFeederSettingIcon;