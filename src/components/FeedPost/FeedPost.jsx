import React from 'react'
import styles from './FeedPost.module.scss';
import ProfileIcon from '../../assets/ProfileIcon.png';

function FeedPost({name , activeAgo , post}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <img src={ProfileIcon} alt="profile" />
        </div>
        <div className={styles.center}>
            <div>
                <h3>{name}</h3>
                <span>{activeAgo}</span>
            </div>
            <p>{post}</p>
        </div>
        <div className={styles.right}>
            <div></div>
        </div>
    </div>
  )
}

export default FeedPost