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
import  NewsItem  from "../components/NewsItem";
import CategoryContainer from "../components/CategoryContainer";
import {categories} from "../util";


const CategoryList = () => categories.map((category,index) => <CategoryContainer title ={category.name} category={category.category} key={index}/> );   


const NewsByCategoryPage = compose(
  isContainer('container'),
)(CategoryList)

export default NewsByCategoryPage;