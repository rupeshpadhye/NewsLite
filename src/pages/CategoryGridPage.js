import React from "react";
import { compose } from 'redux'
import isContainer from "../hoc/isContainer";
import {categories} from "../util";

const CategoryList = () => {
  return (
    <div className="category-group">
      { categories.filter(category=> category.default).map((category,index) => <a  key={category.name} href={`/category/${category.category}`} className={`category-card ${category.category}`}>{category.name}</a>)  }  
    </div>
  )
}


const CategoryGridPage = compose(
  isContainer('container')
)(CategoryList)

export default CategoryGridPage;