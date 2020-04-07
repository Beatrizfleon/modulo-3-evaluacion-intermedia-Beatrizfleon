import React from 'react';
import '../stylesheets/App.css';
import Pokelist from './PokeList';

function App() {
  return (
    <div className='App'>
      <h1 className='mainTitle'>Mi Lista de Pokemon</h1>
      <Pokelist />
    </div>
  );
}

export default App;
