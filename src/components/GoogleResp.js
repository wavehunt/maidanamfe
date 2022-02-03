import React from "react";
import { useState,useEffect } from 'react';
import { useLocation,useNavigate,Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { signIn } from "../actions";

const GoogleResp = (props) => {
    console.log('--- inside google resp ---');
    console.log(props);
    
    let isMounted=null;

    const {signIn,isSignedIn,error,userId,redirectTo} = props;

    const location = useLocation();
    //const params = useParams(); always empty
    let navigate = useNavigate();
    

    useEffect(()=> {
        isMounted = true;

        const searchParams = new URLSearchParams(location.hash);
    const idToken = searchParams.get("id_token");
    console.log('location: ', location);
    //console.log('window location: ', window.location);
    //console.log('params: ', params); always empty
    console.log('token: ', idToken);

        signIn(idToken);

        return () => isMounted = false;
    },[])
    ;

    if(isSignedIn!==null) {
        if (isSignedIn===false)
        return (
            <Navigate to={redirectTo} state={{e:error.message}}/>
        )

        return (
            <Navigate to={redirectTo} state={{email: userId}}/>
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
