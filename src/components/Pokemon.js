import React from 'react';

function Pokemon(props) {
  const typesList = props.types.map((type, index) => {
    return (
      <li clasname='typesItems' key={index}>
        <h3 className='typeTitle'>{type}</h3>
      </li>
    );
  });
  return (
    <div className='pokemonCard'>
      <img src={props.url} alt='' className='pokemonImage'></img>
      <h2 className='polemonName'>{props.name}</h2>
      <ul className='types'>{typesList}</ul>
    </div>
  );
}

export default Pokemon;
