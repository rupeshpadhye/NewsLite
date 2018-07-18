import React, { Component } from "react";
import NewsFeederHeader from "../components//NewsFeederHeader";
import HeaderTitle from "../components/HeaderTitle";
import NewsFeedSettingIcon from "../components/NewsFeedSettingIcon";
import NewsMenuBar from "../components//NewsMenuBar"; 
import SwipeableRoutes  from "react-swipeable-routes";
import { Router as Router, Route  } from 'react-router-dom';
import CategoryGridPage from './CategoryGridPage';
import TrendingNewsPage from './TrendingNewsPage';
import {history} from "../store";

class Home extends Component {

    handleMenuSelected(selectedMenu) {

    }
    render() {
        const newsMode = [
            {
              label: "Trending",
              uri: "/",
              selected:true
            },
            {
              label: "Category",
              uri: "/category",
              selected:false
            },
          ];
        return (
            <React.Fragment>
                    <NewsFeederHeader>
                        <HeaderTitle header="News Lite" />  
                        <NewsFeedSettingIcon  goTo="/settings" shouldHide={false} icon='settings' ></NewsFeedSettingIcon >
                    </NewsFeederHeader>
                    <NewsMenuBar items= {newsMode} onMenuSelected={this.handleMenuSelected} />
                            <SwipeableRoutes history={history}>
                                <Route from="/" path="/trending" component={TrendingNewsPage} />
                                <Route  path="/category" component={CategoryGridPage}/>
                        </SwipeableRoutes>  
       
            </React.Fragment>
        )
    }
}


export default Home ;




