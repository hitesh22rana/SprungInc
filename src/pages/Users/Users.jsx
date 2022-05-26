import React from "react";
import styles from "./Users.module.scss";

import Navbar from "../../components/Navbar/Navbar";

import FollowUser from "../../components/FollowUser/FollowUser";
import FollowingUser from "../../components/FollowingUser/FollowingUser";

import { UserFollowers } from "../../dummyData/userFollower";
import { UserFollowings } from "../../dummyData/userFollowing";

function Users() {
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
          <ManyFollower />
          <ManyFollowing />
        </div>
      </div>
    </>
  );
}

export default Users;