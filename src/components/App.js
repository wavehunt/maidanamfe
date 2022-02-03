import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoogleResp from './GoogleResp';
import Header from './Header';
import Home from './Home';
import Error from './Error';
import Landing from './Landing';

const App = () => {

    return(
        <BrowserRouter>
        <div 
        className='ui header'
        style={{background:'#EEEEEE'}}
        >
            <Header/>
        </div>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/auth' element={<GoogleResp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/error' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;