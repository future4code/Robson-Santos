import React from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import { useEffect, useState } from "react";

export default function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const changePokeName = event => {
    setPokeName(event.target.value) 
  }

  const pegarPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(res => {
      setPokeList(res.data.results)
    })
    .catch(err => {
      console.log(err.data)
    })
  }

  useEffect(() => {
    pegarPokemon()
  }, [])

  return (
    <div>
      <select onChange={changePokeName}>
          <option value={pokeList}>Nenhum</option>
            {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}
