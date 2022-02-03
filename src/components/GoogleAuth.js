import React from 'react';
import { useState,useEffect } from 'react';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import { useNavigate,useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


const GoogleAuth = ({isSignedIn}) => {
    console.log('---inside googleauth---')        
    const renderButton = () => {
        return (
            !isSignedIn ? <LoginButton/> : <LogoutButton/>
        )
    };

    const navigate = useNavigate();
    const location = useLocation();

    
    

    useEffect(()=> {
    if (isSignedIn===false && location.pathname !== '/') {
        navigate('/');
    }
    },[isSignedIn]);
    
    

    return (
        <div>
            {renderButton()}
        </div>
    )
}

const mapStateToProps = state => {
    return state.auth;
}

//export default connect(mapStateToProps,{signOut})(GoogleAuth);
export default connect(mapStateToProps,{})(GoogleAuth);


