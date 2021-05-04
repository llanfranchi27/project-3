import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import {useLocation} from 'react-router-dom';

function PostDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  // using the useLocation hook from react-router dom, to grab the 
  // state, desctructering the puppy variable attached to state
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