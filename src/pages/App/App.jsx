import { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import * as postsApi from "../../utilities/posts-api";
import AddPostPage from "../AddPostPage/AddPostPage";
import PostListPage from "../PostListPage/PostListPage";
import PostDetailPage from "../PostDetailPage/PostDetailPage";
import NavBar from "../../components/NavBar/NavBar";
import EditPostPage from "../EditPostPage/EditPostPage";

import "./App.css";
// import PostsPage from '../AddPostPage/AddPostPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await postsApi.getAll();
      setPosts(posts);
    }
    getPosts();
  }, []);
  const history = useHistory();
  useEffect(() => {
    history.push("/");
  }, [posts, history]);

  async function handleAddPost(newPostData) {
    const newPost = await postsApi.create(newPostData);
    setPosts([...posts, newPost]);
  }

  async function handleUpdatePost(updatedPostData) {
    const updatedPost = await postsApi.update(updatedPostData);
    const newPostArray = posts.map((p) =>
      p._id === updatedPost._id ? updatedPost : p
    );
    setPosts(newPostArray);
  }

  async function handleDeletePost(id) {
    await postsApi.deleteOne(id);
    setPosts(posts.filter((p) => p._id !== id));
  }
  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <Switch> */}
          <Route path="/list">
            <PostListPage posts={posts} handleDeletePost={handleDeletePost} />
          </Route>
          <Route path="/add">
            <AddPostPage handleAddPost={handleAddPost} />
          </Route>
          <Route exact path="/details">
            <PostDetailPage />
          </Route>
          <Route exact path="/edit">
            <EditPostPage handleUpdatePost={handleUpdatePost} />
          </Route>
          {/* <Redirect to="/posts" /> */}
          {/* </Switch> */}
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}
