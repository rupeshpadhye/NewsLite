import React, { Component } from "react";
import { BrowserRouter as Router, Route  } from 'react-router-dom';
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
      };
      //this.handleIconClicked = this.handleIconClicked.bind(this);
    }
   
  
    handleIconClicked = () => this.setState({ menuVisible: !this.state.menuVisible })

    handleLangaugeChanged = (event,data) => {this.props.languageChangedTo(data.value)}

    handleCountryChanged = (event,data) => { this.props.countryChangedTo(data.value)}

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
          <Router>        
          <section className="newsfeeder">
            <NewsFeederHeader header='News'>
                <NewsFeedSettingIcon  onIconClicked ={this.handleIconClicked} shouldHide={false} icon='settings' ></NewsFeedSettingIcon >
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
