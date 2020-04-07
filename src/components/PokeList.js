import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data/pokemons.json';

function PokeList() {
  const pokemonsList = pokemons.map((pokemon) => {
    return (
      <div className='pokeListContainer'>
        <li className='pokeListItem' key={pokemon.id}>
          <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} />
        </li>
      </div>
    );
  });
  return <ul className='pokeList'>{pokemonsList}</ul>;
}

export default PokeList;
