import React from "react";
import "../styles/WildPokemonStyles.css";

const WildPokemon = ({ wildPoke, catchPoke }) => {
  return (
    <section className="wildPokemonArea">
      <h2 className="encounter">Wild Encounter</h2>
      <img
        src={
          wildPoke
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${wildPoke.id}.png`
            : null
        }
        className="wildPoke"
        alt={`${wildPoke.name}`}
      />
      <h3 className="wildName">{wildPoke.name}</h3>
      <button className="catch-btn" onClick={() => catchPoke(wildPoke)}>
        Catch
      </button>
    </section>
  );
};

export default WildPokemon;
