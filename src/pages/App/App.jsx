import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import * as playlistApi from '../../utilities/playlists-api'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.css';

export default function App() {
	const [user, setUser] = useState(getUser());
	const[allPlaylists, setAllPlaylists]= useState([]);

	useEffect(() => {
		async function getAllPlaylists(){
			const playlists = await playlistApi.getAll();
			setAllPlaylists(playlists);
}
getAllPlaylists();

	}, [])

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} allPlaylist ={allPlaylists} />
					<Switch>
						<Route path='/orders/new'>
							<NewOrderPage />
						</Route>
						<Route path='/orders'>
							<OrderHistoryPage />
						</Route>
						<Redirect to='/orders' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
