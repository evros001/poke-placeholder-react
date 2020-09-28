import React from 'react';
import PokemonList from './PokemonList';
import PostsList from './PostsList';

function Lists() {
  return (
    <div className="lists-container">
      <h1 className="main-title">Blog Posts and Pokemon</h1>
      <section className="list-container">
        <PokemonList />
        <PostsList />
      </section>
    </div>
  );
}

export default Lists;
