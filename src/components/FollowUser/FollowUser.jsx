import React from 'react'
import styles from './FollowUser.module.scss';
import ProfileIcon from '../../assets/ProfileIcon.png';

function FollowUser({ name , following }) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <img src={ProfileIcon} alt="profile" />
        </div>
        <div className={styles.center}>
            <h3>{name}</h3>
            <span>Following : {following}</span>
        </div>
        <button>Follow</button>
    </div>
  )
}

export default FollowUser