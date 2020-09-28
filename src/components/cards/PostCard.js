import React from 'react';
import styles from '../../stylesheets/Post.module.css'

function PostCard(props) {

  // simple card component with no added logic needed and no use for hooks

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{props.postTitle}</h2>
      <p className={styles.body}>{props.postCopy}</p>
    </article>
  );
}

export default PostCard;