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

    handleMenuSelected = (item) => {this.props.newsModeChagedTo(item.uri)}

    handleLoadNextPage = ()=> { this.props.incrementPage();}

    setSideBarProperies = (menuVisible,menuAnimation,menuDirection) => this.setState({menuVisible,menuAnimation,menuDirection});

    componentDidMount() {
      const {language,country,category,uri,page} = this.props;
      this.props.fetchNews(language,country,"trending",uri,page);
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
         this.props.fetchNews(language,country,"trending",uri,page);
      }
    }

    
    render() {
      let domToRender ;
      const { menuVisible,width,menuAnimation,menuDirection,hideMenuButton } = this.state;
      const {loading, error, language, country,news,category} = this.props;
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
  