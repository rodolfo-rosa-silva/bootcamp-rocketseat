import React from 'react';

import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader avatar={props.data.avatar} time={props.data.time} name={props.data.name} />
    <p className="content-post">{props.data.content}</p>
  </div>
);

export default Post;
