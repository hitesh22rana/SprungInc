import React from 'react'
import styles from './UserProfile.module.scss';
import ProfileIcon from '../../assets/ProfileIcon.png';

function UserProfile() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <img src={ProfileIcon} alt="profile" />
        </div>
        <div className={styles.right}>
            <h3>Arjun Reddy</h3>
            <div>
                <span>Posts : 511</span>
                <span>Followers : 511</span>
                <span>Following : 511</span>
            </div>
        </div>
    </div>
  )
}

export default UserProfile