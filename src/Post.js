import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Post = forwardRef(({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
},ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} alt="" />
      </div>
      <div className="post__details">
        <div className="post__header">
          <div className="post__headerInfo">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="verified__icon" />} @
                {username}
              </span>
            </h3>
            <ExpandMoreIcon />
          </div>
          <div className="post__headerText">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
);
