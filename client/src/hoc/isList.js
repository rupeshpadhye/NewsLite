import React from 'react';

const isList = type => WrappedComponent => {
  const IsList = props => (
    <div className={type}>
      {
        props.news &&  props.news.map((item,index) => (<WrappedComponent {...item} key={index} rowClass={props.rowClass} />))
      }
      {
          props.children
      }
    </div>
  )

  return IsList
}

export default isList