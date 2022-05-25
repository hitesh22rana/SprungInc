import { React , useState } from 'react'
import styles from './Profile.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import UserProfile from '../../components/UserProfile/UserProfile';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FeedPost from '../../components/FeedPost/FeedPost';
import FollowUser from '../../components/FollowUser/FollowUser';
import FollowingUser from '../../components/FollowingUser/FollowingUser';

function Profile() {
    const [select , setSelect] = useState('post');

    const ManyPost = () => {
        return (
            <>
                <FeedPost />
                <FeedPost />
                <FeedPost />
            </>
        );
    }

    const ManyFollower = () => {
        return (
            <>
                <FollowUser />
                <FollowUser />
                <FollowUser />
            </>
        );
    }

    const ManyFollowing = () => {
        return (
            <>
                <FollowingUser />
                <FollowingUser />
                <FollowingUser />
            </>
        );
    }

    return (
        <>
            <Navbar/>
            <div className={styles.wrapper}>
                <div>
                    <UserProfile />
                    
                    <div className={styles.profileSelect}>
                        <button onClick={()=>setSelect('post')}>
                            <ChatOutlinedIcon/> Post
                        </button>
                        <button onClick={()=>setSelect('followers')}>
                            <ChatOutlinedIcon/> Followers
                        </button>
                        <button onClick={()=>setSelect('following')}>
                            <ChatOutlinedIcon/> Following
                        </button>
                    </div>

                    {
                        select === 'post' ?
                        <ManyPost />
                        : select === 'followers' ?
                        <ManyFollower /> : 
                        <ManyFollowing />
                    }
                </div>
            </div>
        </>
    )
}

export default Profile