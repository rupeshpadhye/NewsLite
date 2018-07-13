import React from "react";
import {parse, distanceInWordsToNow} from 'date-fns'

const NewsItem = (props) =>  ( 
        <a  className={props.rowClass} target='_blank' href={props.url} >
               
                <div className="content-placeholder">
                <span className="date-holder">{distanceInWordsToNow(parse(props.publishedAt))} ago  </span> 
                <div className="news_header">{props.description}</div>
                    <span className="date-holder"> {props.source.name} </span> 
                </div>
                <div className="image-placeholder">
                    <img alt={props.description} src={props.urlToImage} width="100%" height="100%" />
                </div>
        </a>
);



 /*<div><i class='material-icons' style={styles.img_align}>room</i> {item.author}</div>*/
export default NewsItem;