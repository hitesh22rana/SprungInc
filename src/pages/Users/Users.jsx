import React from 'react';
import styles from './Users.module.scss';

import Following from '../../components/FollowingUser/FollowingUser';
import Follow from '../../components/FollowUser/FollowUser';

import Navbar from '../../components/Navbar/Navbar';

function Users() {
  return (
      <>
        <Navbar />
        <div className={styles.wrapper}>
            <div>
                <Follow />
                <Follow />
                <Follow />
                <Following />
                <Following />
                <Following />
            </div>
        </div>
      </>
  )
}

export default Users