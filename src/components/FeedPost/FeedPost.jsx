import React from 'react'
import styles from './FeedPost.module.scss';
import ProfileIcon from '../../assets/ProfileIcon.png';

function FeedPost() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <img src={ProfileIcon} alt="profile" />
        </div>
        <div className={styles.center}>
            <div>
                <h3>Arjun Reddy</h3>
                <span>10 min ago</span>
            </div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, dicta illum laudantium debitis tenetur ex praesentium velit porro et beatae laborum similique cum, unde accusantium fugit architecto iste quisquam?
            </p>
        </div>
        <div className={styles.right}>
            <div></div>
        </div>
    </div>
  )
}

export default FeedPost