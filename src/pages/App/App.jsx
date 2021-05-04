import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import * as postsApi from '../../utilities/posts-api'
import AddPostPage from '../AddPostPage/AddPostPage';
import PostListPage from '../PostListPage/PostListPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage'
import NavBar from '../../components/NavBar/NavBar';

import './App.css';
import PostsPage from '../AddPostPage/AddPostPage';

export default function App() {
	const [user, setUser] = useState(getUser());
	const[posts, setPosts]= useState([]);

	useEffect(() => {
		async function getPosts(){
			const posts = await postsApi.getAll();
			setPosts(posts);
}
getPosts();
}, [])
const history = useHistory();
useEffect(() => {
	history.push('/')
},[posts, history])
	

	async function handleAddPost (newPostData){
		const newPost = await postsApi.create(newPostData);
		setPosts([...posts, newPost])
	}

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}  />
					<Switch>
						<Route path='/posts/new'>
							<PostsPage />
						</Route>
						<Route path='/dashboard'>
							<AddPostPage />
						</Route>
						<Route exact path='/add'>
							<AddPostPage
							handleAddPost={handleAddPost}
							/>
						</Route>
						<Route exact path='/'>
							<PostListPage
							posts={posts}
							/>
						</Route>
						<Route exact path='/details'>
							<PostDetailPage />
						</Route>
						<Redirect to='/dashboard' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
