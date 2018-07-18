import React from "react";
import { compose } from 'redux'
import isContainer from "../hoc/isContainer";
import {categories} from "../util";
import {Link,Route}  from 'react-router-dom';

//<CategoryContainer title ={category.name} category={category.category} key={index}/>
const CategoryList = () => {
  return (
    <div className="category-group">
      { categories.map((category,index) => <a  key={category.name} href={`/category/${category.category}`} className="category-card">{category.name}</a>)  }  
    </div>
  )
}


const CategoryGridPage = compose(
  isContainer('container')
)(CategoryList)

export default CategoryGridPage;