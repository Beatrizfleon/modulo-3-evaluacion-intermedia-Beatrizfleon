import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
  const pokemonsList = props.pokemons.map((pokemon) => {
    console.log(pokemon);
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
