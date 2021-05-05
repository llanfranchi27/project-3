import React from "react";
import { Link } from "react-router-dom";

export default function PostListItem({ post, handleDeletePost }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{post.name}</h3>
      </div>
      <div className="panel-footer PuppyListItem-action-panel">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/posts/details",
            state: { post },
          }}
        >
          DETAILS
        </Link>
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/posts/edit",
            state: { post },
          }}
        >
          EDIT
        </Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => handleDeletePost(post._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
