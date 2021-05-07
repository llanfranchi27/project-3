import React, {useEffect} from 'react';
import * as postsApi from '../../utilities/posts-api';

import PostListItem from '../../Components/PostListItem/PostListItem'

import "./PostListPage.css";

export default function PostListPage(props) {
	

	useEffect(() => {
		async function getPosts() {
		  const posts = await postsApi.getAll();
		  props.setPosts(posts); 
		}
		getPosts();
	  }, []);
	return (
		<>
		  <h1>Post List</h1>
		  <div className="PostListPage-grid">
			{props.posts.map((post) => (
			  <PostListItem
				post={post}
				key={post._id}
				handleDeletePost={props.handleDeletePost}
			  />
			))}
		  </div>
		</>
	  );
}
