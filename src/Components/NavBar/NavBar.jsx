// import React from 'react';
// import { Link } from 'react-router-dom';
// import * as userService from '../../utilities/users-service';

// export default function NavBar({ user, setUser }) {
// 	function handleLogOut() {
// 		// Delegate to the users-service
// 		userService.logOut();
// 		// Update state will also cause a re-render
// 		setUser(null);
// 	}

// 	return (
// 		<nav>
// 			<Link to='/orders'>Dashboard</Link>
// 			&nbsp; | &nbsp;
// 			<Link to='/posts/new'>Add Post</Link>
// 			&nbsp; | &nbsp;
// 			<span>{user.name}</span>
// 			&nbsp; | &nbsp;
// 			<Link to='' onClick={handleLogOut}>
// 				Log Out
// 			</Link>
// 		</nav>
// 	);
// }

import {Link, NavLink} from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <NavLink exact activeStyle={{color: 'orange'}} to="/posts/list">Post List</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{color: 'orange'}} to="/posts/add">Add Post</NavLink>
      &nbsp; | &nbsp; <span>Welcome, {user.name} !</span>
      &nbsp; | &nbsp; <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}