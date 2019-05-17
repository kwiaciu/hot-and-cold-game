import React from 'react';
import './App.css';
import Core from './core';
import Help from './help';

function App() {
  const randomNumber = Math.floor(Math.random()*100)+1;
  return (
    <div className="App">
      <header>
        <h1>Hot and cold game</h1>
      </header>
      <Core correctNumber={randomNumber}/> 
      <Help />
      
    </div>

  );
}

export default App;
