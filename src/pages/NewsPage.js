import React, { Component } from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose } from 'redux'
import { fetchNews ,languageChangedTo,countryChangedTo,categoryChangeTo,newsModeChagedTo,incrementPage } from "../reducers/news_feeder";
import withLoadMore from "../hoc/withLoadMore";
import withLoadingList from "../hoc/withLoadingList";
import withNetworkStateListener from "../hoc/withNetworkStateListener";
import isContainer from "../hoc/isContainer";
import isList from "../hoc/isList";
import  NewsItem  from "../components/NewsItem";
import NewsFeederHeader from "../components//NewsFeederHeader";
import HeaderTitle from "../components/HeaderTitle";
import NewsFeedSettingIcon from "../components//NewsFeedSettingIcon";



class NewsPage extends Component {
  
     getCategory() {
        if(this.props.category) {
         return this.props.category;
       }
       else if(this.props.match && this.props.match.params.category) {
         return this.props.match.params.category;
       }
       else {
        return 'trending';
       }

     }

    
    componentDidMount() {
      const {language,country,uri,page} = this.props;
      const category = this.getCategory();
      this.props.fetchNews(language,country,category,uri,page);
    }

    componentDidUpdate(prevProps) {
     const {language:prevLanguage,country:prevCountry,uri:prevUri,page:prevPage,category:prevCategory} = prevProps;
     const {language,country,uri,page} = this.props;
     const category = this.getCategory();
      if (prevLanguage !== language 
        || prevCountry !==  country 
        || prevUri !== uri
        || prevPage !== page
        || prevCategory !== category
      ) {
         this.props.fetchNews(language,country,category,uri,page);
      }
    }

    
    render() {
      const {loading, error, language, country,news} = this.props;
      const category = this.getCategory();
      const data = news[category];
      const rowClass = this.props.rowClass ? this.props.rowClass : 'row'
        return (
          <React.Fragment>
            <InfiniteScrollList 
              placeholders={5} 
              loading={loading}
              news={data}
              onNewsClicked={this.handleNewsSelected}
              loadNextPage={this.props.incrementPage}
              rowClass={rowClass}
            />
          </React.Fragment> 
        )

    }
  }

  const mapStateToProps = state => ({
    news: state.news_feeder.news,
    loading: state.news_feeder.loading,
    error: state.news_feeder.error,
    language:state.news_feeder.params.language,
    country:state.news_feeder.params.country,
    uri:state.news_feeder.params.uri,
    page:state.news_feeder.params.page,
    category:state.news_feeder.params.category
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNews,
    countryChangedTo,
    languageChangedTo,
    newsModeChagedTo,
    incrementPage,
},dispatch);

  
const InfiniteScrollList = compose(
  withNetworkStateListener,
  isContainer('container'),
  withLoadingList,
  withLoadMore,
  isList('vertical'),
)(NewsItem);

export default connect(
  mapStateToProps ,
  mapDispatchToProps
  )(NewsPage) ;
  