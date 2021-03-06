import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props)  => {
    const [pokemon, setPokemon] = useState({})

  const pegaPokemon = pokemon => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => {
          console.log(response.pokemon)
        setPokemon(response.pokemon)
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    if (pokemon !== props)
    pegaPokemon()
  }, [pokemon])

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }

  export default PokeCard