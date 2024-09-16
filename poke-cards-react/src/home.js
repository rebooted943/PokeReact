import React from 'react';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
    const navigate = useNavigate();

    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look for your card.
        </p>
        <a
          className="App-link"
          onClick={()=> navigate('/search')}
        >
          Let's start
        </a>
      </header>
    </div>
    )
}

export default Home;