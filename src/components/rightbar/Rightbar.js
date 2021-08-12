import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

const Rightbar = ({profile}) => {


    const HomeRightbar = () => {
        return(
            <>
                <div className="rightbar__wrapperContainer">
                    <img src="assets/gift.png" alt="" className="rightbar__birthdayImg" />
                    <span className="rightbar__birthdayText"> <b>Paul Foster</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbar__ad" />
                <h4 className="rightbar__title">Online Friends</h4>
                <ul className="rightbar__friendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                    
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
        <>
            <h4 className="rightbar__profileRightbarTitle">User information</h4>
            <div className="rightbar__profileRightbarInfo">
                <div className="rightbar__profileRightbarInfoItem">
                    <span className="rightbar__profileRightbarInfoKey">City:</span>
                    <span className="rightbar__profileRightbarInfoValue">New York</span>
                </div>
                <div className="rightbar__profileRightbarInfoItem">
                    <span className="rightbar__profileRightbarInfoKey">From:</span>
                    <span className="rightbar__profileRightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbar__profileRightbarInfoItem">
                    <span className="rightbar__profileRightbarInfoKey">Relationship:</span>
                    <span className="rightbar__profileRightbarInfoValue">Married</span>
                </div>
            </div>
            <h4 className="rightbar__profileRightbarTitle">User friends</h4>
            <div className="rightbar__profileRightbarFollowings">
                <div className="rightbar__profileRightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar__profileRightbarFollowingImg" />
                    <span className="rightbar__profileRightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbar__profileRightbarFollowing">
                    <img src="assets/person/2.jpeg" alt="" className="rightbar__profileRightbarFollowingImg" />
                    <span className="rightbar__profileRightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbar__profileRightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbar__profileRightbarFollowingImg" />
                    <span className="rightbar__profileRightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbar__profileRightbarFollowing">
                    <img src="assets/person/4.jpeg" alt="" className="rightbar__profileRightbarFollowingImg" />
                    <span className="rightbar__profileRightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbar__profileRightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbar__profileRightbarFollowingImg" />
                    <span className="rightbar__profileRightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbar__profileRightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbar__profileRightbarFollowingImg" />
                    <span className="rightbar__profileRightbarFollowingName">John Carter</span>
                </div>
            </div>
        </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbar__wrapper">
               {profile ?  <ProfileRightbar /> : <HomeRightbar />}
            </div>

        </div>
    )
}

export default Rightbar

