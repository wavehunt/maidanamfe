import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import {connect} from 'react-redux';
import {signOut} from '../actions';
import { useNavigate } from "react-router-dom";
import { GOOGLE_CLIENT_ID } from "../app/appcons";

const LogoutButton = ({signOut,redirectTo,isSignedIn}) => {

    const logout = () => {
        console.log('user logged out');
        signOut();
    }

    //style={{background:'#4285F4',color:'#FFFFFF'}}
    return (
        <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText='Logout'
                onLogoutSuccess={()=> logout()}
                render={renderProps=> (
                    <button onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className='ui grey button'
                    >   Logout
                    </button>
                )}
            />
    )
}
/*
const mapStateToProps = state => {
    return state.auth;
}
*/

export default connect(null,{signOut})(LogoutButton);
