import React, { useState, useEffect } from "react";

const App = () => {
  const [wildPoke, setWildPoke] = useState({});

  useEffect(() => {
    FindWildPoke();
  }, []);

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const FindWildPoke = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`)
      .then((res) => res.json())
      .then((res) => setWildPoke(res));
    return data;
  };

  return (
    <div>
      <header>
        <h1>Pokemon API</h1>
      </header>

      <section>{wildPoke.name}</section>
    </div>
  );
};

export default App;
