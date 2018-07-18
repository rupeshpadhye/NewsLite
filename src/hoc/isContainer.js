import React  from "react";
import Snackbar from "../components/Snackbar";


const isContainer =  type => (WrappedComponent)=> {
    return class extends React.Component {
        render() {
           return ( 
                <div className={type}>
                    <WrappedComponent {...this.props} >
                        <Snackbar />
                    </WrappedComponent>    
                </div>
           ) 
        }
    }
}        

export default isContainer;
