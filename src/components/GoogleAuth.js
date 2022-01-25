import React from 'react';
import { useState,useEffect } from 'react';
import {GoogleLogin,GoogleLogout} from 'react-google-login';

const GoogleAuth = () => {
    const [isSignedIn,setIsSignedIn] = useState(null);

    const responseGoogle = (resp) => {
        //console.log('response: ', resp)
        if (resp.error) {
            setIsSignedIn(false);
            return console.log(resp.error);
        }

        console.log(resp);
        setIsSignedIn(true);
         
    }

    const logout = () => {
        console.log('user logged out');
        setIsSignedIn(false);
    }

    const renderButton = () => {
        return (
            !isSignedIn ?
            <GoogleLogin
                clientId='515718912201-5o9h09qa20j5vsl1t7gunc9917ad6kck.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
                isSignedIn={true}
                
                uxMode='redirect'
                //redirectUri='http://localhost:3000'
                redirectUri='https://maidanamreact.herokuapp.com'

            /> :
            <GoogleLogout
                clientId='515718912201-5o9h09qa20j5vsl1t7gunc9917ad6kck.apps.googleusercontent.com'
                buttonText='Logout'
                onLogoutSuccess={logout}
            />
        )
    };

    return (
        <div>
            {renderButton()}
        </div>
    )


}

export default GoogleAuth;


