import React from "react";
import "../styles/WildPokemonStyles.css";
import withData from "./withData";

const WildPoke = ({
  catchPoke = (f) => f,
  fetchData = (f) => f,
  data = {},
}) => {
  return (
    <section className="wildPokemonArea">
      <h2 className="encounter">Wild Encounter</h2>
      <img
        src={
          data
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
            : null
        }
        className="wildPoke"
        alt={`${data.name}`}
      />
      <h3 className="wildName">{data.name}</h3>
      <button
        className="catch-btn"
        onClick={() => {
          catchPoke(data);
          fetchData(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`);
        }}
      >
        Catch
      </button>
    </section>
  );
};

const pokeId = () => {
  const min = Math.ceil(1);
  const max = Math.floor(151);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const WildPokemon = withData(
  WildPoke,
  `https://pokeapi.co/api/v2/pokemon/${pokeId()}`
);

export default WildPokemon;
