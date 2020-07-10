import React from "react";

const Pokedex = ({ pokemon, releasePoke }) => {
  return (
    <section>
      <h2>Pokedex</h2>
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <img
            src={
              poke
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`
                : null
            }
            alt={`${poke.name}`}
          />
          <h3>{poke.name}</h3>
          <button onClick={() => releasePoke(poke)}>release</button>
        </div>
      ))}
    </section>
  );
};

export default Pokedex;
