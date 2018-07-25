import React  from "react";
import NewsFeederHeader from "../components/NewsFeederHeader";
import HeaderTitle from "../components/HeaderTitle";
import NewsFeedSettingIcon from "../components//NewsFeedSettingIcon";



const SettingsPage = (props) => (
    <React.Fragment>
            <NewsFeederHeader>
                <NewsFeedSettingIcon  goTo="/" shouldHide={false} icon='keyboard_backspace' ></NewsFeedSettingIcon >
                <HeaderTitle header="Settings" />  
            </NewsFeederHeader>
        <div>About</div>
    </React.Fragment>
);



export default SettingsPage ;
  
