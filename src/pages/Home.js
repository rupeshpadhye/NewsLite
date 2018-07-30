import React, { Component } from "react";
import NewsFeederHeader from "../components//NewsFeederHeader";
import HeaderTitle from "../components/HeaderTitle";
import NewsFeedSettingIcon from "../components/NewsFeedSettingIcon";
import NewsMenuBar from "../components//NewsMenuBar"; 
import SwipeableRoutes  from "react-swipeable-routes";
import { Route  } from 'react-router-dom';
import CategoryGridPage from './CategoryGridPage';
import NewsPage from './NewsPage';
import {history} from "../store";
import Media from "react-media";
import CategoryList from '../components/CategoryList';
import { categoryChangeTo } from "../reducers/news_feeder";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


const newsMode = [
    {
      label: "Trending",
      uri: "/trending",
      selected:true
    },
    {
      label: "Category",
      uri: "/category",
      selected:false
    },
  ];


const MobileView = (props) => (
  <React.Fragment>
       <NewsMenuBar items= {newsMode}  />
        <SwipeableRoutes history={history}>
              <Route from="/" path="/trending" component={NewsPage} />
              <Route  path="/category" component={CategoryGridPage}/>
        </SwipeableRoutes>
  </React.Fragment>
);


const DesktopView = (props) => (
    <React.Fragment>
    <div  className="desktop-container">
    <div className="category-box">
         <CategoryList onCategoryClicked={(category)=>{props.categoryChangeTo(category)}}></CategoryList>
    </div>
    <div className="news-area">
        <NewsPage category={props.category} {...props}/>
    </div>
    </div>
    <div className="powered-by"> Powered by NewsAPI.org</div>
    </React.Fragment>
);

class Home extends Component {

  
    render() {
      
        return (
            <React.Fragment>
                    <NewsFeederHeader>
                        <HeaderTitle header="News Lite" />  
                        <NewsFeedSettingIcon  goTo="/settings" shouldHide={false} icon='settings' classNames="pointer" ></NewsFeedSettingIcon >
                    </NewsFeederHeader>
                    <Media query="(max-width: 767px)">
                            {matches =>
                                matches ? (
                                  <MobileView />
                                ) : (
                                  <DesktopView  category= {this.props.category} categoryChangeTo= {this.props.categoryChangeTo} rowClass="card"/>
                                )
                            }
                    </Media>
                     
       
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({
    category:state.news_feeder.params.category,
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    categoryChangeTo,
},dispatch);

export default connect(
    mapStateToProps ,
    mapDispatchToProps
    )(Home) ;





