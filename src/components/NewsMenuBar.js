import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NewsMenuBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuItems: this.props.items
      };

    }
   
    onMenuClicked= (selectedMenu) => {
      const menuItems  = this.state.menuItems.map(item => { 
                    item.label===selectedMenu.label ? item.selected=true: item.selected=false;
                    return item;
        }) ;
      this.setState({menuItems});
      this.props.onMenuSelected(selectedMenu);
    };

    render() {
        const menuItems = this.state.menuItems;
        console.log(menuItems);
        return (
            <nav>
            { menuItems.map((item,index) => <Link key={index} to={item.uri} onClick= {()=>this.onMenuClicked(item)} className={item.selected?'active':''}>{item.label}</Link> )}
            </nav>  
        );

    }
}


export default NewsMenuBar;