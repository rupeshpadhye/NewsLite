import React  from "react";
import NewsFeederHeader from "../components/NewsFeederHeader";
import HeaderTitle from "../components/HeaderTitle";
import NewsFeedSettingIcon from "../components//NewsFeedSettingIcon";

const InlineStyleObj = {

    image: {
        'border-radius': '50%',
        'text-align':'center',
    },
    imageblock: {
        'display':'block',
        'margin':'auto',
    }
}


const SettingsPage = (props) => (
    <React.Fragment>
            <NewsFeederHeader>
                <NewsFeedSettingIcon  goTo="/" shouldHide={false} icon='keyboard_backspace' ></NewsFeedSettingIcon >
                <HeaderTitle header="About" />  
            </NewsFeederHeader>
          <div className="about">  
           <h1>News Lite</h1>
           <div>News Lite is React framework based Progressive web app. News feed provided by <b>NEWSAPI.org</b> </div>
           
           <div style={InlineStyleObj.imageblock}>
           <img style={InlineStyleObj.image} alt="" src="https://avatars2.githubusercontent.com/u/10848048?s=196&amp;v=4" width="196" />
           <h3>Rupesh Padhye (Developer)</h3>
           </div>
            <div>
            <a href="https://github.com/rupeshpadhye" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/rupesh-padhye-16301417/" target="_blank" rel="noopener">Linkedin</a>
            </div>
            <div>
              <h4>Technical skills</h4>
              <ui>
                <li>UI Technologies - Javascript , React ,Polymer Js ,Vue.js </li>
                <li>Backend Technologies - Java, Spring ,Spring boot</li>
                <li>Mobile Technologies - Android , Hybrid App -ionic 1.x ,</li>
              </ui>
            </div>
            <div>
              <h4>Contacts</h4>
             <a href="https://github.com/rupeshpadhye" target="_blank" rel="noopener">GitHub</a>
              
              <a href="https://www.linkedin.com/in/rupesh-padhye-16301417/" target="_blank" rel="noopener">Linkedin</a>
            </div>
           </div> 
    </React.Fragment>
);



export default SettingsPage ;
  
