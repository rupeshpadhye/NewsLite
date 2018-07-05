import React  from "react";

const isContainer = type => WrappedComponent =>{
    const IsContainer = props => (
        <div className={type}>
            <WrappedComponent {...props} />
        </div>
    )
    return IsContainer;
}
    
export default isContainer;
