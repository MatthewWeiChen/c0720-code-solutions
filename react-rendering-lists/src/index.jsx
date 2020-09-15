import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokeList(pokemon) {
  const pokedexList = pokemon.pokedex;
  const listPokemon =
    pokedexList.map(name =>
      <li key={name.number}>{name.name}</li>);
  return (
    <ul>{listPokemon}</ul>
  );
}

ReactDOM.render(
  <PokeList pokedex={pokedex} />,
  document.getElementById('root')
);
