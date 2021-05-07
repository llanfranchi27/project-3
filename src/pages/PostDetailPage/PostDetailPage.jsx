import React from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import {useLocation} from 'react-router-dom';

function PostDetailPage(props) {
  
  const { state: {post} } = useLocation()

  return (
    <>
      <h1>Post Details</h1>
      <PostCard
        key={post._id}
        post={post}
      />
    </>
  );
}

export default PostDetailPage;