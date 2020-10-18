import React from "react";
import "./Widget.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

export const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__search">
        <SearchIcon />
        <input placeholder="Search Twitter" />
      </div>
      <div className="widget__container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"933354946111705097"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="abhinav"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "abhinav" }}
        />
      </div>
    </div>
  );
};
