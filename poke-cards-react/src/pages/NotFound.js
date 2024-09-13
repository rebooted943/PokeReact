import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="App">
      <header className="App-header">
        
        <button onClick={() => navigate('/')}>
            Go back home
        </button>
          Learn React
      </header>
    </div>
    )
}

export default NotFound;