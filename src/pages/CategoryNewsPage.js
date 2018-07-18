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
import NewsFeederHeader from "../components//NewsFeederHeader";
import HeaderTitle from "../components/HeaderTitle";
import NewsFeedSettingIcon from "../components//NewsFeedSettingIcon";
import withNetworkStateListener from "../hoc/withNetworkStateListener";



class CategoryContainer extends Component {
    
    handleLoadNextPage = ()=> { this.props.incrementPage();}

    
    componentDidMount() {
      const {language,country,uri,page} = this.props;
      this.props.fetchNews(language,country,this.props.match.params.category,uri,page);
    }

 
    componentDidUpdate(prevProps) {
     const {language:prevLanguage,country:prevCountry,category:prevCategory,uri:prevUri,page:prevPage} = prevProps;
     const {language,country,uri,page} = this.props;
     const  category = this.props.match.params.category;
      if (prevLanguage !== language 
        || prevCountry !==  country 
        || prevUri !== uri
        || prevPage !== page
      ) {
         this.props.fetchNews(language,country,category,uri,page);
      }
    }

    
    render() {
      const {loading,news} = this.props;
      const data = news[this.props.match.params.category];
        return (
          <React.Fragment>
                <NewsFeederHeader>
                    <NewsFeedSettingIcon  goTo="/category" shouldHide={false} icon='keyboard_backspace' ></NewsFeedSettingIcon >
                    <HeaderTitle header={this.props.match.params.category} />  
                </NewsFeederHeader>
            <InfiniteScrollList 
                placeholders={5} 
                loading={loading}
                news={data}
                onNewsClicked={this.handleNewsSelected}
                loadNextPage={this.handleLoadNextPage}
                rowClass="row"
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
    incrementPage,
},dispatch);

  
const InfiniteScrollList = compose(
  withNetworkStateListener,
  isContainer('container'),
  withLoadMore,
  withLoadingList,
  isList('vertical'),
)(NewsItem);

export default connect(
  mapStateToProps ,
  mapDispatchToProps
  )(CategoryContainer) ;
  
