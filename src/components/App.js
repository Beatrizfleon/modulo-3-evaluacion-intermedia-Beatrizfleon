import React, { useState } from 'react';
import '../stylesheets/App.css';
import Pokelist from './PokeList';
import pokemosData from '../data/pokemons.json';

function App() {
  const [pokemons /*setPokemons*/] = useState(pokemosData);
  const [favourites, setFavourites] = useState([]);

  const pushFavourite = (pokemon) => {
    console.log('Push' + pokemon);
    setFavourites([...favourites, pokemon]);
  };

  return (
    <div className='App'>
      <h1 className='mainTitle'>Mi Lista de Pokemon</h1>
      <Pokelist pokemons={pokemons} favourites={favourites} handleFavourites={pushFavourite} />
    </div>
  );
}

export default App;
