import React, { Component } from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose } from 'redux'
import { fetchNews ,languageChangedTo,countryChangedTo,categoryChangeTo,newsModeChagedTo,incrementPage } from "../reducers/news_feeder";
import withLoadMore from "../hoc/withLoadMore";
import withLoadingList from "../hoc/withLoadingList";
import isContainer from "../hoc/isContainer";
import isList from "../hoc/isList";
import  NewsCategoryItem  from "../components/NewsCategoryItem";



class NewsByCategoryPage extends Component {
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
   

    handleLoadNextPage = ()=> { this.props.incrementPage();}

    setSideBarProperies = (menuVisible,menuAnimation,menuDirection) => this.setState({menuVisible,menuAnimation,menuDirection});

    componentDidMount() {
      const {language,country,category,uri,page} = this.props;
      this.props.fetchNews(language,country,category,uri,page);
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
      let domToRender ;
      const { menuVisible,width,menuAnimation,menuDirection,hideMenuButton } = this.state;
      const {loading, error, language, country,news} = this.props;
   
        return (
          <div> 
          <div>Sports</div>     
          <InfiniteScrollList 
            placeholders={5} 
            loading={loading}
            news={news}
            onNewsClicked={this.handleNewsSelected}
            loadNextPage={this.handleLoadNextPage}
          />
          </div>
        )

    }
  }

  const mapStateToProps = state => ({
    news: state.news_feeder.news,
    loading: state.news_feeder.loading,
    error: state.news_feeder.error,
    language:state.news_feeder.params.language,
    country:state.news_feeder.params.country,
    category:state.news_feeder.params.category,
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
)(NewsCategoryItem);

export default connect(
  mapStateToProps ,
  mapDispatchToProps
  )(NewsByCategoryPage) ;
  