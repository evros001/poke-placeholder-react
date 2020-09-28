import React, { useState, useEffect } from 'react';
import PostCard from './cards/PostCard';

function PostsList() {
  const [postListData, setPostListData] = useState(null)

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      const data = await res.json();
      setPostListData(data);
    }

    fetchApi();
  }, []);

  return (
    <section className="list-two">
        <h2 className="list-title">Blog Posts</h2>
        {postListData && postListData.map(obj => {
          console.log('ahha', obj)
          return <PostCard
            key={obj.id}
            postTitle={obj.title}
            postCopy={obj.body} />
        })}
    </section>
  );
}

export default PostsList;