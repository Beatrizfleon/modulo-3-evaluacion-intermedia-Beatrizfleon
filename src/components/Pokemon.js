import React from 'react';

function Pokemon(props) {
  const selectFavourite = () => {
    console.log('soy favorito' + props.pokemonObj);
    props.handleFavourites(props.pokemonObj);
  };
  const typesList = props.pokemonObj.types.map((type, index) => {
    return (
      <li clasname='typesItems' key={index}>
        <h3 className='typeTitle'>{type}</h3>
      </li>
    );
  });
  let selectedFavourite = props.isFavourite ? 'favourite' : '';
  return (
    <div className={`pokemonCard ${selectedFavourite}`} onClick={selectFavourite}>
      <img src={props.pokemonObj.url} alt='' className='pokemonImage'></img>
      <h2 className='pokemonName'>{props.pokemonObj.name}</h2>
      <ul className='types'>{typesList}</ul>
    </div>
  );
}

export default Pokemon;
