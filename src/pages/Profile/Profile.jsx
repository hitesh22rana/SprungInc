// External Imports
import { React, useState } from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

// Internal Imports
import styles from "./Profile.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import UserProfile from "../../components/UserProfile/UserProfile";
import FeedPost from "../../components/FeedPost/FeedPost";
import FollowUser from "../../components/FollowUser/FollowUser";
import FollowingUser from "../../components/FollowingUser/FollowingUser";

// Dummy Data
import { UserFeed } from "../../dummyData/userFeed";
import { UserFollowers } from "../../dummyData/userFollower";
import { UserFollowings } from "../../dummyData/userFollowing";

function Profile() {
  const [select, setSelect] = useState("post");

  const ManyPost = () => {
    return (
      <>
        {UserFeed.map((singleFeed, index) => {
          return (
            <FeedPost
              key={index}
              name={singleFeed.name}
              activeAgo={singleFeed.activeAgo}
              post={singleFeed.post}
            />
          );
        })}
      </>
    );
  };

  const ManyFollower = () => {
    return (
      <>
        {UserFollowers.map((singleFollower, index) => {
          return (
            <FollowUser
              key={index}
              name={singleFollower.name}
              following={singleFollower.following}
            />
          );
        })}
      </>
    );
  };

  const ManyFollowing = () => {
    return (
      <>
        {UserFollowings.map((singleFollowing, index) => {
          return (
            <FollowingUser
              key={index}
              name={singleFollowing.name}
              following={singleFollowing.following}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div>
          <UserProfile />

          <div className={styles.profileSelect}>
            <button
              style={
                select === "post"
                  ? { borderTop: "2px solid rgba(0, 0, 0, 0.5)" }
                  : {}
              }
              onClick={() => setSelect("post")}
            >
              <ChatOutlinedIcon /> Post
            </button>
            <button
              style={
                select === "followers"
                  ? { borderTop: "2px solid rgba(0, 0, 0, 0.5)" }
                  : {}
              }
              onClick={() => setSelect("followers")}
            >
              <ChatOutlinedIcon /> Followers
            </button>
            <button
              style={
                select === "following"
                  ? { borderTop: "2px solid rgba(0, 0, 0, 0.5)" }
                  : {}
              }
              onClick={() => setSelect("following")}
            >
              <ChatOutlinedIcon /> Following
            </button>
          </div>

          {select === "post" ? (
            <ManyPost />
          ) : select === "followers" ? (
            <ManyFollower />
          ) : (
            <ManyFollowing />
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
