import React, { Component } from "react";
import { Router as Router, Route ,Switch } from 'react-router-dom';
import SwipeableRoutes  from "react-swipeable-routes";
import {history} from "./store";
import NewsFeederHeader from "./components/NewsFeederHeader";
import NewsFeedSettingIcon from "./components/NewsFeedSettingIcon";
import NewsMenuBar from "./components/NewsMenuBar";
import CategoryNewsPage from './pages/CategoryNewsPage';
import Home from './pages/Home';
import SettingsPage from "./pages/SettingsPage";



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
            <Route exact path="/settings" component={SettingsPage}/> 
            <Route  path="/" component={Home} />
          </Switch>
          </Router>    
        )

    }
  }


export default NewsFeeder;
