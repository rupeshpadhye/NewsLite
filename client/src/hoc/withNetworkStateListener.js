import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {setStateAsOffline,setStateAsOnline} from "../reducers/network_state";
import {showSnackbar,DURATION_MEDIUM} from "../reducers/snackbar_message";

const withNetworkStateListener = (Component) => {
      class withNetworkStateListener extends React.Component {
        
        constructor(props) {
            super(props);
            this.onOfline = this.onOfline.bind(this);
            this.onOnline = this.onOnline.bind(this);
          }

          componentDidMount() {
            window.addEventListener('online', this.onOnline);
            window.addEventListener('offline', this.onOfline);
          };
          
          
          componentWillUnmount() {
            window.removeEventListener('online', this.onOnline);
            window.removeEventListener('offline', this.onOfline);
          };
          
          onOnline(e) {
            this.props.setStateAsOnline();
            this.props.showSnackbar('App is now online',DURATION_MEDIUM);
          }
    
          onOfline(e) {
            this.props.setStateAsOffline();
            this.props.showSnackbar('App is now offline',DURATION_MEDIUM);
          }

  
        render() {
            return ( 
                  <Component {...this.props} />             
          );
          }
    }
  return  connect(null ,mapDispatchToProps)(withNetworkStateListener) ;
}

const mapDispatchToProps = dispatch => bindActionCreators({
   setStateAsOffline
  ,setStateAsOnline,
  showSnackbar
},dispatch);

export default withNetworkStateListener;



  