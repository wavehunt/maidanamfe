import React from "react";
import {useEffect } from 'react';
import { useLocation,Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { signIn } from "../actions";

const GoogleResp = (props) => {
    console.log('--- inside google resp ---');
    console.log(props);

    const {signIn,isSignedIn,error,user,redirectTo} = props;

    const location = useLocation();
        
    useEffect(()=> {

        const searchParams = new URLSearchParams(location.hash);
        const idToken = searchParams.get("id_token");
        console.log('location: ', location);
        console.log('token: ', idToken);

        signIn(idToken);

    },[])
    ;

    if(isSignedIn!==null) {
        if (isSignedIn===false)
        return (
            <Navigate to={redirectTo} state={{e:error.message}}/>
        )

        return (
            <Navigate to={redirectTo} state={{email: user.email}}/>
        )
    }
    
    return (
            <div>Loading... </div>
         );

    
}

const mapStateToProps = state => {
    return state.auth;
}

export default connect(mapStateToProps,{signIn})(GoogleResp);
