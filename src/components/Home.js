import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const email = location.state.email;

    return (
        <>
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
            <div>{email}</div>
        </>
    )
}

export default Home;