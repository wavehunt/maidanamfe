import React from "react";
import {Link} from 'react-router-dom';
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className='ui secondary menu'>
            <a className='item' href='/'>Maidanam</a>
            <div className='right menu'>
                <div className='item'>
                <GoogleAuth/>
                </div>
            </div>
        </div>
    )
};

export default Header;
