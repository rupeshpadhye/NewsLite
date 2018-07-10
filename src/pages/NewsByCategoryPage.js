import React from "react";
import { compose } from 'redux'
import isContainer from "../hoc/isContainer";
import CategoryContainer from "../components/CategoryContainer";
import {categories} from "../util";


const CategoryList = () => categories.map((category,index) => <CategoryContainer title ={category.name} category={category.category} key={index}/> );   


const NewsByCategoryPage = compose(
  isContainer('container'),
)(CategoryList)

export default NewsByCategoryPage;