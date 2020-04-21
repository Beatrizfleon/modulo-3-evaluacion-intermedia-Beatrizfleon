import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
  let favouritesList = props.favourites;
  const pokemonsList = props.pokemons.map((pokemon) => {
    console.log(pokemon);
    let isFavourite = false;
    for (const favourite of favouritesList) {
      if (favourite.id === pokemon.id) {
        isFavourite = true;
      }
    }

    return (
      <div className='pokeListContainer'>
        <li className='pokeListItem' key={pokemon.id}>
          <Pokemon pokemonObj={pokemon} isFavourite={isFavourite} handleFavourites={props.handleFavourites} />
        </li>
      </div>
    );
  });
  return <ul className='pokeList'>{pokemonsList}</ul>;
}

export default PokeList;
