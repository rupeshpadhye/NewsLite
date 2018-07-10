import React  from "react";
import Snackbar from "../components/Snackbar";

const isContainer = type => WrappedComponent =>{
    const IsContainer = props => (
        <div className={type}>
            <WrappedComponent {...props} >
                <Snackbar />
            </WrappedComponent>    
        </div>
    )
    return IsContainer;
}
    
export default isContainer;
