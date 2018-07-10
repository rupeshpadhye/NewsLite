import React from "react";


const NewsItem = (props) =>  ( 
        <a  className="card" target='_blank' href={props.url} >
                <div className="image-placeholder">
                    <img alt={props.description} src={props.urlToImage} width="100%" height="100%" />
                </div>
                <div className="content-placeholder">
                <div className="news_header">{props.description}</div>
                    <span className="date-holder">{props.publishedAt}</span>
                </div>
        </a>
);



 /*<div><i class='material-icons' style={styles.img_align}>room</i> {item.author}</div>*/
export default NewsItem;