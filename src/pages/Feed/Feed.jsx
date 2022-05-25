import React from 'react'
import styles from './Feed.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import FeedPost from '../../components/FeedPost/FeedPost';

function Feed() {
  return (
      <>
        <Navbar />
        <div className={styles.wrapper}>
            <div>
              <div className={styles.buttonWrapper}>
                <button>
                  Write
                </button>
              </div>
              <FeedPost />
              <FeedPost />
              <FeedPost />
            </div>
        </div>
      </>
  )
}

export default Feed