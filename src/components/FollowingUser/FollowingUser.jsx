import React from 'react'
import styles from './FollowingUser.module.scss';
import ProfileIcon from '../../assets/ProfileIcon.png';

function FollowingUser() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <img src={ProfileIcon} alt="profile" />
        </div>
        <div className={styles.center}>
            <h3>Arjun Reddy</h3>
            <span>Following : 200</span>
        </div>
        <span>Following</span>
    </div>
  )
}

export default FollowingUser