import React, { useState, useEffect } from 'react';

function PokemonCard(props) {
  const [pokemonImg, setPokemonImg] = useState(null)

  useEffect(() => {
    async function fetchImg() {
      const res = await fetch(`${props.overviewUrl}`)
      const data = await res.json();
      setPokemonImg(data.sprites.front_default);
    }

    fetchImg();
  }, []);

  return (
    <article className="list-item-container">
      <h2 className="list-item-title">{props.pokemonName}</h2>
      {pokemonImg &&
        <img src={pokemonImg} alt={props.pokemonName} className="list-item-img" />
      }
    </article>
  );
}

export default PokemonCard;