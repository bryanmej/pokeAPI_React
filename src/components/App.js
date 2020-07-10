import React, { useState, useEffect } from "react";

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

  return (
    <div>
      <header>
        <h1>Pokemon API</h1>
      </header>

      <section>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${wildPoke.id}.png`}
          alt={`${wildPoke.name}`}
        />
        <h3>{wildPoke.name}</h3>
        <button onClick={() => catchPoke(wildPoke)}>Catch</button>
      </section>

      <section>
        <h2>Pokedex</h2>
        {pokedex.map((poke) => (
          <div key={poke.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
              alt={`${wildPoke.name}`}
            />
            <h3>{wildPoke.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
