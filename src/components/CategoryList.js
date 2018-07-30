import React from "react";
import PropTypes from 'prop-types';

const CategoryItem = (props)=>(
    <div  onClick={()=> {props.onCategoryClicked(props.category)}} className={`category-card ${props.category}`}> {props.name}</div>)

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    onCategoryClicked: PropTypes.func.isRequired
  };

const CategoryList = (props)=> {
return (
    <div className="category-group">
     { props.categories.map((category,index) => <CategoryItem  key={category.name} {...category} onCategoryClicked= {props.onCategoryClicked}  /> )  }
    </div> 
) 

};

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired
  };

export default CategoryList;


