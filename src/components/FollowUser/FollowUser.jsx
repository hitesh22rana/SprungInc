import React from 'react'
import styles from './FollowUser.module.scss';
import ProfileIcon from '../../assets/ProfileIcon.png';

function FollowUser() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <img src={ProfileIcon} alt="profile" />
        </div>
        <div className={styles.center}>
            <h3>Arjun Reddy</h3>
            <span>Following : 200</span>
        </div>
        <button>Follow</button>
    </div>
  )
}

export default FollowUser