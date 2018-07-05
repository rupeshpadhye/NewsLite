import React from "react";


const NewsFeederSettingIcon = props => (
    <i className={props.shouldHide? 'material-icons pointer hidden':'material-icons pointer'} onClick={props.onIconClicked} >{props.icon} </i>
    
);

export default NewsFeederSettingIcon;