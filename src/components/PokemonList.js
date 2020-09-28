import React, { useState, useEffect } from 'react';
import PokemonCard from './cards/PokemonCard';

function PokemonList() {
  const [pokemonListData, setPokemonListData] = useState(null)

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const data = await res.json();
      setPokemonListData(data.results);
    }

    fetchApi();
  }, []);

  return (
    <section className="list-two">
        <h2 className="list-title">Pokemon</h2>
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