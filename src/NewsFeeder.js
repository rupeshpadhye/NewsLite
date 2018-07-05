import React, { Component } from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import NewsFeederHeader from "./components/NewsFeederHeader";
import NewsFeedSettingIcon from "./components/NewsFeedSettingIcon";
import NewsMenuBar from "./components/NewsMenuBar";
import NewsDetailPage from './pages/NewsDetailPage';
import NewsByCategoryPage from './pages/NewsByCategoryPage';
import TrendingNewsPage from './pages/TrendingNewsPage';


class NewsFeeder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuVisible: false,
        menuAnimation: 'overlay',
        menuDirection: 'left',
        hideMenuButton:false
      };
      //this.handleIconClicked = this.handleIconClicked.bind(this);
    }
   
  
    handleIconClicked = () => this.setState({ menuVisible: !this.state.menuVisible })

    handleLangaugeChanged = (event,data) => {this.props.languageChangedTo(data.value)}

    handleCountryChanged = (event,data) => { this.props.countryChangedTo(data.value)}

    handleMenuSelected = (item) => {}


    render() {
      let domToRender ;
      const { menuVisible,width,menuAnimation,menuDirection,hideMenuButton } = this.state;
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
        {
          label: "Sources",
          uri: "/sources",
          selected:false
        },
      ];


        return (
          <Router>        
          <section className="newsfeeder">
            <NewsFeederHeader header='News'>
                <NewsFeedSettingIcon  onIconClicked ={this.handleIconClicked} shouldHide={hideMenuButton} icon='settings' ></NewsFeedSettingIcon >
            </NewsFeederHeader>
            <NewsMenuBar items= {newsMode} onMenuSelected={this.handleMenuSelected} />
  
                    <Route  path="/category" component={NewsByCategoryPage}/>
                    <Route exact path="/" component={TrendingNewsPage} />
                      <Route  path="/detail" component={NewsDetailPage}/> 
          </section>
          </Router>    
        )

    }
  }


export default NewsFeeder;
