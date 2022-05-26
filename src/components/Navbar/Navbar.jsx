import { React , useContext } from 'react'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

import { NavbarContext } from '../../contexts/NavbarContext';

function Navbar() {

  const { navbarSelect , setNavbarSelect } = useContext(NavbarContext);

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
          <div>
              <div className={styles.left}>
                  <span>TweetX</span>
              </div>
              <div className={styles.right}>
                  <Link style={navbarSelect === 'feed' ? {color : '#ff595e'} : {}} onClick={()=>setNavbarSelect('feed')} to='/feed'>Feed</Link>
                  <Link style={navbarSelect === 'users' ? {color : '#ff595e'} : {}} onClick={()=>setNavbarSelect('users')} to='/users'>Users</Link>
                  <Link style={navbarSelect === 'profile' ? {color : '#ff595e'} : {}} onClick={()=>setNavbarSelect('profile')} to='/profile'>Profile</Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar