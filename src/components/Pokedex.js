import React from "react";
import "../styles/PokedexStyles.css";

const Pokedex = ({ pokemon, releasePoke }) => {
  return (
    <>
      <h2 className="dex-title">Pokedex</h2>
      <section className="pokedex">
        {pokemon.map((poke) => (
          <div key={poke.id} className="pokemon">
            <img
              src={
                poke
                  ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`
                  : null
              }
              alt={`${poke.name}`}
            />
            <h3>{poke.name}</h3>
            <button className="info">Info</button>
            <button className="release" onClick={() => releasePoke(poke)}>
              &times;
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pokedex;
