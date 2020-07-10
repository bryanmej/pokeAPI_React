import React from "react";

const WildPokemon = ({ wildPoke, catchPoke }) => {
  return (
    <section>
      <img
        src={
          wildPoke
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${wildPoke.id}.png`
            : null
        }
        alt={`${wildPoke.name}`}
      />
      <h3>{wildPoke.name}</h3>
      <button onClick={() => catchPoke(wildPoke)}>Catch</button>
    </section>
  );
};

export default WildPokemon;
