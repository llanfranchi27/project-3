import React from 'react';
// import * as usersService from '../../utilities/users-service';
import PostListItem from '../../Components/PostListItem/PostListItem'
// import { PromiseProvider } from 'mongoose';
import "./PostListPage.css";

export default function PostListPage(props, handleDeletePost) {
	// async function handleCheckToken() {
	// 	usersService.checkToken();
	// }

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
