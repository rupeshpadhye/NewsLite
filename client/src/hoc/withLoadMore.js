import React from "react";



const ShowLoadMore = (props) => (props.newsSize >0 && !props.loading && <div onClick={()=> props.loadNextPage()} className="load-more" >Load More</div>);

const withLoadMore = (Component) =>
 class withLoadMore extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            events: ['scroll', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll', 'resize', 'touchmove', 'touchend'],
          }
        //this.onScroll = this.onScroll.bind(this);
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
       
        if (
            (event.view.innerHeight + event.view.scrollY) >= (document.body.offsetHeight - 500) &&
            this.props.news.length
          ) {
            this.props.loadNextPage();
              console.table(event.view.innerHeight,event.view.scrollY,document.body.offsetHeight)
          }
      
      };
  
      
      render() {
        return ( 
              <Component {...this.props}>
                    <ShowLoadMore loading= {this.props.loading} loadNextPage= {this.props.loadNextPage}
                        newsSize={ this.props.news && this.props.news.length} />
                    {this.props.children}    
              </Component>  
      );
      }
}

export default withLoadMore;