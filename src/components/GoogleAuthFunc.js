import React from "react";
import {useState,useEffect} from 'react';

//let isSignedIn=null;
let auth = null;

const GoogleAuth = ()=> {

    //State for sign-in status
    const [isSignedIn,setIsSignedIn] = useState(null);
    
    //callback for gapi init
    const initClient = () => {
            
        //React.initializeTouchEvents(true);
        
        window.gapi.client.init({
            'clientId': '515718912201-5o9h09qa20j5vsl1t7gunc9917ad6kck.apps.googleusercontent.com',
            'scope': 'profile',
            'ux_mode': 'redirect',
            'redirect_uri':'http://localhost:3000'
        })
        .then(()=> {
            alert('ínit done')
            auth = window.gapi.auth2.getAuthInstance();
    
            //setup listener for sign-in changes
            auth.isSignedIn.listen(handleAuthChange);
    
            //handle initial state
            handleAuthChange(auth.isSignedIn.get());
        })
    }
    
    //load and initialize the gapi on component load
    window.onload = 
        ()=> {
            alert(window.gapi);
            console.log(window.gapi);
            window.gapi.load('client:auth2', initClient
            )};
        
    /*
    useEffect(
        ()=> window.gapi.load('client:auth2', initClient),
        []
    );
    */

    //respond to sign-in changes
    const handleAuthChange = userLoggedIn => {
        if(userLoggedIn) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
    }

    return (
        <div>
            {renderButton(isSignedIn)}
        </div>
    )
}

//call gapi signIn process
const onSignInClick = () => {
    //const authObj = auth=='null'?'yes':'no'
    alert('çlicked: ' + auth );
    //console.log('auth: ', auth)
    if(auth) {
        auth.signIn();
    }
}

//call gapi signOut process
const onSignOutClick = () => {
    if(auth) {
        auth.signOut();
    }
}

const renderButton = isSignedIn => {
    return isSignedIn ? 
        <button 
                onTouchStart={onSignOutClick}
                onClick={onSignOutClick} 
                className='ui button negative'
                style={{cursor:'pointer'}} 
        >
            Logout
        </button> :
        <button
                
                
                onClick={onSignInClick} 
                className='ui button link-fmt'
                //style={{backgroundColor:'#4285F4',color:'#FFFFFF'}}
        >
            <i className='google icon'/>
            Logina
        </button>
}



export default GoogleAuth;