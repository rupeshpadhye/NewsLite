import React, { Component } from "react";
import { Router as Router, Route ,Switch } from 'react-router-dom';
import SwipeableRoutes  from "react-swipeable-routes";
import {history} from "./store";
import NewsFeederHeader from "./components/NewsFeederHeader";
import NewsFeedSettingIcon from "./components/NewsFeedSettingIcon";
import NewsMenuBar from "./components/NewsMenuBar";
import NewsDetailPage from './pages/NewsDetailPage';
import CategoryNewsPage from './pages/CategoryNewsPage';
import TrendingNewsPage from './pages/TrendingNewsPage';
import Home from './pages/Home';

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
     
        return (
          <Router  history={history}>        
          <Switch className="newsfeeder">
            <Route exact path="/category/:category" component={CategoryNewsPage}/> 
            <Route  path="/" component={Home} />
          </Switch>
          
           
          </Router>    
        )

    }
  }


export default NewsFeeder;
