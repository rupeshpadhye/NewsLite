import React, { Component } from "react";
import { findDOMNode } from 'react-dom'



const withLoadMore = (Component) =>
 class withLoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: ['scroll', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll', 'resize', 'touchmove', 'touchend'],
          }
        this.onScroll = this.onScroll.bind(this);
      }
      componentDidMount() {
      /*  this.state.events.forEach((type) => {
            if (window.addEventListener) {
              findDOMNode(this.refs.listview).addEventListener(type, this.onScroll.bind(this), false)
            } else {
              findDOMNode(this.refs.listview).attachEvent('on' + type, this.onScroll.bind(this), false)
            }
          })*/
      };
      
      componentWillUnmount() {
            /*this.state.events.forEach((type) => {
                if (window.addEventListener) {
                findDOMNode(this.refs.listview).removeEventListener(type, this.onScroll.bind(this), false)
                } else {
                findDOMNode(this.refs.listview).attachEvent('on' + type, this.onScroll.bind(this), false)
                }
            })*/
      };
      
      onScroll (event) {
        console.log(event.view.innerHeight,event.view.scrollY,document.body.offsetHeight)
        if (
            (event.view.innerHeight + event.view.scrollY) >= (document.body.offsetHeight - 500) &&
            this.props.news.length
          ) {
            this.props.loadNextPage();
              console.table(event.view.innerHeight,event.view.scrollY,document.body.offsetHeight)
          }
      
      };
  
      render() {
        let showLoadMore;
        if (this.props.news.length && !this.props.loading) {
            showLoadMore= <div onClick={()=>this.props.loadNextPage()} className="load-more" >Load More</div>
        }
       return (  
            <React.Fragment>
              <Component {...this.props}>
                   {showLoadMore}
              </Component>  
              
            </React.Fragment>
      );
      }
}

export default withLoadMore;