import React, { Component } from "react";
import { Router as Router, Route  } from 'react-router-dom';
import NewsFeederHeader from "./components/NewsFeederHeader";
import NewsFeedSettingIcon from "./components/NewsFeedSettingIcon";
import NewsMenuBar from "./components/NewsMenuBar";
import NewsDetailPage from './pages/NewsDetailPage';
import NewsByCategoryPage from './pages/NewsByCategoryPage';
import TrendingNewsPage from './pages/TrendingNewsPage';
import {history} from "./store";
import SwipeableRoutes  from "react-swipeable-routes";

class NewsFeeder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuVisible: false,
      };
      //this.handleIconClicked = this.handleIconClicked.bind(this);
    }
   
  
    handleIconClicked = () => this.setState({ menuVisible: !this.state.menuVisible })

  
    handleMenuSelected = (item) => {}


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
          <Router  history={history}>        
          <main className="newsfeeder">
            <NewsFeederHeader header='News Lite'>
                <NewsFeedSettingIcon  onIconClicked ={this.handleIconClicked} shouldHide={false} icon='settings' ></NewsFeedSettingIcon >
            </NewsFeederHeader>
            <NewsMenuBar items= {newsMode} onMenuSelected={this.handleMenuSelected} />
            <SwipeableRoutes>
                    <Route exact path="/" component={TrendingNewsPage} />
                    <Route  path="/category" component={NewsByCategoryPage}/>
                  
             </SwipeableRoutes>         
          </main>
          </Router>    
        )

    }
  }


export default NewsFeeder;
