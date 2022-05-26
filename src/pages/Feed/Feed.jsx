import React from 'react'
import styles from './Feed.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import FeedPost from '../../components/FeedPost/FeedPost';

import { UserFeed } from '../../dummyData/userFeed'

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
              {
                UserFeed.map((singleFeed , index) => {
                  return (
                    <FeedPost key={index} name={singleFeed.name} activeAgo={singleFeed.activeAgo} post={singleFeed.post}/>
                  );
                })
              }
            </div>
        </div>
      </>
  )
}

export default Feed