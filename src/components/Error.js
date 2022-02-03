import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
    const location = useLocation();
    //console.log(location);
    //console.log(window.location);
    //const error = props.location.state.error;
    return (
        <div>
            <p>Something Went Wrong !</p>
            <p>DETAILS: {location.state.e}</p>
    
        </div>
    )
}

export default Error;

