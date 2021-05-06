

import {Link, NavLink} from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (

    <>
  <div id='header'>
    <h1>SEI BLOGS</h1>

  </div>
    <nav className="navbar">
      <NavLink exact activeStyle={{color: 'orange'}} to="/list">Post List</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{color: 'orange'}} to="/add">Add Post</NavLink>
      &nbsp; | &nbsp; <span>Welcome, {user.name} !</span>
      &nbsp; | &nbsp; <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
</>  
  );
}