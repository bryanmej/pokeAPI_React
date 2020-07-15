import React, { useState, useEffect } from "react";
import "../styles/Appstyles.css";
import Pokedex from "./Pokedex";
import WildPokemon from "./WildPokemon";

const App = () => {
  const [wildPoke, setWildPoke] = useState({});
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    findWildPoke();
  }, []);

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const findWildPoke = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`)
      .then((res) => res.json())
      .then((res) => setWildPoke(res));
    return data;
  };

  const catchPoke = (poke) => {
    if (pokedex.indexOf(poke) < 0) {
      const pokeArr = [...pokedex, poke];
      setPokedex(pokeArr);
      findWildPoke();
    }
  };

  const releasePoke = (poke) => {
    let updatedArr = pokedex.filter((elem) => elem.id !== poke.id);
    setPokedex(updatedArr);
  };

  return (
    <div>
      <header className="header">
        <h1>Pokemon API</h1>
      </header>

      <WildPokemon wildPoke={wildPoke} catchPoke={catchPoke} />
      <Pokedex pokemon={pokedex} releasePoke={releasePoke} />
    </div>
  );
};

export default App;
