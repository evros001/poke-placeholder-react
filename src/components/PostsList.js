import React, { useState, useEffect } from 'react';
import PostCard from './cards/PostCard';
import styles from '../stylesheets/PostsList.module.css'

function PostsList() {
  // set state post value initialize to null
  const [postListData, setPostListData] = useState(null)

  useEffect(() => {
    // fetch data asynch and call function immedaitly
    async function fetchApi() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      const data = await res.json();
      setPostListData(data);
    }

    fetchApi();
  }, []);

  // make sure we display only when list data is available hence the && conditional
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Blog Posts</h2>
        {postListData && postListData.map(obj => {
          return <PostCard
            key={obj.id}
            postTitle={obj.title}
            postCopy={obj.body} />
        })}
    </section>
  );
}

export default PostsList;