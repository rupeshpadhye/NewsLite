import React from "react";
import { Link, Route } from 'react-router-dom';

const styles = {
    img_align: {
        'vertical-align': 'middle',
        'font-size':'16px'
    },
    date_holder: {
        margin: '10px',
        color: '#808080'
    },
   
}
const NewsList = props => (

   
    props.news.map( (item,index) => 
        
        <a  key= {index} className="card" target='_blank' href={item.url} >
            <div className="image-placeholder">
                <img src={item.urlToImage} width="100%" height="100%" />
            </div>
            <div className="content-placeholder">
            <div className="news_header">{item.description}</div>
                <span className="date-holder">{item.publishedAt}</span>
            </div>
        </a>
     )  
    
);
 /*<div><i class='material-icons' style={styles.img_align}>room</i> {item.author}</div>*/
export default NewsList;