import React, { useState, useEffect } from 'react';
import PokemonCard from './cards/PokemonCard';
import styles from '../stylesheets/PokemonList.module.css'

function PokemonList() {
  // create value in state specific and set initialise to null so that conditional will fail if no data
  const [pokemonListData, setPokemonListData] = useState(null)

  // fetch data and convert to json with useEffect essentially replacing lifecycle methods
  // seperate async call as own function and call immedialty
  useEffect(() => {
    async function fetchApi() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const data = await res.json();
      setPokemonListData(data.results);
    }

    fetchApi();
  }, []);

  // make sure we display only when list data is available hence the && conditional
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Pokemon</h2>
        {pokemonListData && pokemonListData.map((obj, index) => {
          return <PokemonCard 
            key={index}
            overviewUrl={obj.url}
            pokemonName={obj.name} />
        })}
    </section>
  );
}

export default PokemonList;