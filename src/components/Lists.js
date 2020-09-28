import React from 'react';
import PokemonList from './PokemonList';
import PostsList from './PostsList';
import styles from '../stylesheets/Lists.module.css'

// using module styles beacsue there are few containers 
// and changes can happen per modules instead of nesting layers readability and cleanliness 

function Lists() {
  // organize lists as own components in ways that feel natural, in this case pokemon and posts
  return (
    <div>
      <h1 className={styles.title}>Blog Posts and Pokemon</h1>
      <section className={styles.container}>
        <PostsList />
        <PokemonList />
      </section>
    </div>
  );
}

export default Lists;
