import React, { useState, useEffect } from 'react';
import styles from '../../stylesheets/PokemonCard.module.css'

function PokemonCard(props) {
  const [pokemonImg, setPokemonImg] = useState(null)

  useEffect(() => {
    // have to make another api call here beacsue previous data only supplies the correlated url
    // same async immediate function call as before
    async function fetchImg() {
      const res = await fetch(`${props.overviewUrl}`)
      const data = await res.json();
      setPokemonImg(data.sprites.front_default);
    }

    fetchImg();
  }, []);

  // make sure we display only when list data is available hence the && conditional
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{props.pokemonName}</h2>
      {pokemonImg &&
        <img src={pokemonImg} alt={props.pokemonName} />
      }
    </article>
  );
}

export default PokemonCard;