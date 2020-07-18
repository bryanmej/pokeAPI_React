import React from "react";
import "../styles/Appstyles.css";
import Pokedex from "./Pokedex";
import WildPokemon from "./WildPokemon";

const App = () => {
  const [pokedex, setPokedex] = React.useState([]);

  const catchPoke = (poke) => {
    if (pokedex.indexOf(poke) < 0) {
      const pokeArr = [...pokedex, poke];
      setPokedex(pokeArr);
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

      <WildPokemon catchPoke={catchPoke} />
      <Pokedex pokemon={pokedex} releasePoke={releasePoke} />
    </div>
  );
};

export default App;
