import React from 'react';
import Header from './Header';

const App = () => {

    

    return(
        <>
        <div 
        className='ui header'
        style={{background:'#EEEEEE'}}
        >
            <Header/>
        </div>
        <div className='ui container'
            style={{background:'#DDDDDD'}}
            >
                <div className="ui three column divided stackable grid">
  <div className="row">
    <div className="column">
      <p>notes</p>
    </div>
    <div className="column">
      <p>notes</p>
    </div>
    <div className="column">
      <p>notes</p>
    </div>
  </div>
  <div className="tablet mobile only row">
    <div className="column">
      <p>notes</p>
    </div>
    <div className="column">
      <p>notes</p>
    </div>
    <div className="column">
      <p>notes</p>
    </div>
  </div>
</div>
            </div>
        </>
    )
}

export default App;