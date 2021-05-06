import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{post.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Post</dt>
          <dd>{post.text}</dd>
          <dt>Subject</dt>
          <dd>{post.subject}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/">RETURN TO LIST</Link>
      </div>
    </div>
  );
}