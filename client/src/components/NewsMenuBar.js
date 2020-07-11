import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

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
    };

    render() {
        const menuItems = this.state.menuItems;
        return (
            <nav>
            { menuItems.map((item,index) => <NavLink exact key={index} to={item.uri} onClick= {()=>this.onMenuClicked(item)} className="ripple">{item.label}</NavLink> )}
            </nav>  
        );

    }
}


export default NewsMenuBar;