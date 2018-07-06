import React from 'react';

const LoadingItem = () => (
        <div className="card">
        <div className="image-placeholder animated-background"></div>
        <div className="content-placeholder">
            <div className="animated-background content-placeholder-header"></div>
            <div className="animated-background content-placeholder-subheader"></div>
            <div className="animated-background content-placeholder-header"></div>
            <div className="animated-background content-placeholder-subheader"></div>
            <div className="animated-background content-placeholder-header"></div>
        </div>
    </div>
);

const LoadingList =(props) =>(
    props.loading && [...Array(props.placeholders)].map( (index,pos) => <LoadingItem key={pos} /> )
);



const withLoadingList = (Component)=> {
    return class extends React.Component {
        render() {
           return  <Component {...this.props}>
                    <LoadingList placeholders = {this.props.placeholders} loading={this.props.loading}/> 
                     {this.props.children}
                   </Component>
           
        };
    }
  
};

export default withLoadingList;

