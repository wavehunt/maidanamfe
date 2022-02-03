import React from "react";
import {GoogleLogin} from 'react-google-login';
import { REDIRECT_URL,GOOGLE_CLIENT_ID } from "../app/appcons";

const LoginButton = () => {

    return (
        <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText='Login'
      //          onSuccess={responseGoogle}
        //        onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
                //isSignedIn={true}
                uxMode='redirect'
                redirectUri={REDIRECT_URL}
                //redirectUri='https://maidanamreact.herokuapp.com'

            /> 
    )

     /*
    const responseGoogle = (resp) => {
        //console.log('response: ', resp)
        if (resp.error) {
            setIsSignedIn(false);
            return console.log(resp.error);
        }

        console.log(resp);
        setIsSignedIn(true);
         
    }
    */
   
   
}

export default LoginButton;
