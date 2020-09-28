import React from 'react';

function PostCard(props) {

  return (
    <article class="list-item-container">
      <h2 className="list-item-title">{props.postTitle}</h2>
      <p className="list-item-body">{props.postCopy}</p>
    </article>
  );
}

export default PostCard;