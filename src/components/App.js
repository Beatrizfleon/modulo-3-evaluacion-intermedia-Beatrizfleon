import React, { useState } from 'react';
import '../stylesheets/App.css';
import Pokelist from './PokeList';
import pokemosData from '../data/pokemons.json';

function App() {
  const [pokemons /*setPokemons*/] = useState(pokemosData);
  return (
    <div className='App'>
      <h1 className='mainTitle'>Mi Lista de Pokemon</h1>
      <Pokelist pokemons={pokemons} />
    </div>
  );
}

export default App;
