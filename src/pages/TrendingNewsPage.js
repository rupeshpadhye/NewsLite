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



class TrendingNewsPage extends Component {
  
    componentDidMount() {
      const {language,country,uri,page} = this.props;
      const category = (this.props.match.params.category!== undefined) ? this.props.match.params.category:'trending';
      this.props.fetchNews(language,country,category,uri,page);
    }

    componentDidUpdate(prevProps) {
     const {language:prevLanguage,country:prevCountry,uri:prevUri,page:prevPage} = prevProps;
     const {language,country,uri,page} = this.props;
     const category = (this.props.match.params.category!== undefined) ? this.props.match.params.category:'trending';
      if (prevLanguage !== language 
        || prevCountry !==  country 
        || prevUri !== uri
        || prevPage !== page
      ) {
         this.props.fetchNews(language,country,category,uri,page);
      }
    }

    
    render() {
      const {loading, error, language, country,news} = this.props;
      const category = (this.props.match.params.category!== undefined) ? this.props.match.params.category:'trending';
      const data = news[category];
        return (
          <InfiniteScrollList 
            placeholders={5} 
            loading={loading}
            news={data}
            onNewsClicked={this.handleNewsSelected}
            loadNextPage={this.handleLoadNextPage}
            rowClass="row"
          />
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
    category:state.news_feeder.params.category,
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNews,
    countryChangedTo,
    languageChangedTo,
    categoryChangeTo,
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
  )(TrendingNewsPage) ;
  