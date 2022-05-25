import React from 'react'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
          <div>
              <div className={styles.left}>
                  <span>TweetX</span>
              </div>
              <div className={styles.right}>
                  <Link to='/feed'>Feed</Link>
                  <Link to='/users'>Users</Link>
                  <Link to='/profile'>Profile</Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar