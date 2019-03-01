import React from 'react';

const PostHeader = props => (
  <div className="post-header">
    <img src={props.avatar} className="avatar" />
    <div className="infos">
      <h2>{props.name}</h2>
      <time>{props.time}</time>
    </div>
  </div>
);

export default PostHeader;
