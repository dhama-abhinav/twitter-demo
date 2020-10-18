import React, { useState, useEffect } from "react";
import "./Feed.css";
import FlareIcon from "@material-ui/icons/Flare";
import { TweetBox } from "./TweetBox";
import { Post } from "./Post";
import db from "./firebase";
import FlipMove from 'react-flip-move'

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h3>Home</h3>
        <FlareIcon />
      </div>
      <TweetBox />
      {posts.map((post) => (
        <FlipMove>
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
        </FlipMove>
      ))}

      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
};
