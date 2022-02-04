import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
    const location = useLocation();
    
    return (
        <div>
            <p>Something Went Wrong !</p>
            <p>DETAILS: {location.state.e}</p>
    
        </div>
    )
}

export default Error;

