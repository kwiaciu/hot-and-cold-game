import React from 'react';
import './App.css';
import Core from './core';
import Help from './help';
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container';


function App() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return (
        <div className="App">
      <head>
      <meta
         name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
      </head>
      <AppBar position="static">
        <h1>Hot and cold game</h1>
      </AppBar>
      <Container maxWidth="sm">
      <Core correctNumber={randomNumber}/> 
      <Help />
      </Container>
      
    </div>

    );
}

export default App;