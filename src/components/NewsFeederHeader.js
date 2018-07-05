import React from "react";


const NewsFeederHeader = props => (
    <header>
     <div className='header-titler'>{props.header}</div>
     <div>
     {props.children}
     </div>
  </header>
  
);

export default NewsFeederHeader;