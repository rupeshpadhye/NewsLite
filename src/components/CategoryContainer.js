import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose } from 'redux'
import { fetchNews ,languageChangedTo,countryChangedTo,categoryChangeTo,newsModeChagedTo,incrementPage } from "../reducers/news_feeder";
import withLoadMore from "../hoc/withLoadMore";
import withLoadingList from "../hoc/withLoadingList";
import isContainer from "../hoc/isContainer";
import isList from "../hoc/isList";
import  NewsItem  from "../components/NewsItem";


class CategoryContainer extends Component {
    
    handleLoadNextPage = ()=> { this.props.incrementPage();}

    
    componentDidMount() {
      const {language,country,category,uri,page} = this.props;
      this.props.fetchNews(language,country,category,uri,page);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {news,category} = nextProps;
        const {news:prevNews,category:prevCategory,loading} = this.props;
        if( news[category].length !== prevNews[prevCategory].length ||  loading) {
            return true;
        } 
        return false;
      
    }

    componentDidUpdate(prevProps) {
     const {language:prevLanguage,country:prevCountry,category:prevCategory,uri:prevUri,page:prevPage} = prevProps;
     const {language,country,category,uri,page} = this.props;

      if (prevLanguage !== language 
        || prevCountry !==  country 
        || prevCategory !== category
        || prevUri !== uri
        || prevPage !== page
      ) {
         this.props.fetchNews(language,country,category,uri,page);
      }
    }

    
    render() {
      const {loading,news} = this.props;
      const data = news[this.props.category];
      console.log('render');
        return (
        <React.Fragment>
            <div className="category-title">{this.props.title}</div>
            <InfiniteScrollList 
                placeholders={5} 
                loading={loading}
                news={data}
                onNewsClicked={this.handleNewsSelected}
                loadNextPage={this.handleLoadNextPage}
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
  isContainer('category-container'),
  withLoadMore,
  withLoadingList,
  isList('horizontal'),
)(NewsItem);

export default connect(
  mapStateToProps ,
  mapDispatchToProps
  )(CategoryContainer) ;
  
