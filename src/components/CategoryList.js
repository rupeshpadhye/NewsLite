import React from "react";
import {categories} from "../util";



const CategoryList = (props)=> {
       return (
        <div className="category-group">
           { categories.map((category,index) => <div  key={category.name} 
                onClick={()=>{props.onCategoryClicked(category.category)}} 
                className={`category-card ${category.category}`}>
            {category.name}</div>)  }
           </div> 
       ) 
       
};

export default CategoryList;


