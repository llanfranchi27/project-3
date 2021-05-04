import React from 'react';
import * as usersService from '../../utilities/users-service';
import PostListItem from '../../components/PostListItem/PostListItem'
import { PromiseProvider } from 'mongoose';


export default function PostListPage(props) {
	async function handleCheckToken() {
		usersService.checkToken();
	}

	return (
		<>
		  <h1>Puppy List</h1>
		  <div className="PostListPage-grid">
			{props.posts.map((post) => (
			  <PostListItem
				post={post}
				key={post._id}
				handleDeletePuppy={props.handleDeletePuppy}
			  />
			))}
		  </div>
		</>
	  );
}
