import React from 'react'
import "./ProfileRightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'




    

    const ProfileRightbar = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <div className="profileRightbar">
                <div className="profileRightbar__wrapper">
                    <h4 className="profileRightbar__profileprofileRightbarTitle">User information</h4>
                    <div className="profileRightbar__profileprofileRightbarInfo">
                        <div className="profileRightbar__profileprofileRightbarInfoItem">
                            <span className="profileRightbar__profileprofileRightbarInfoKey">City:</span>
                            <span className="profileRightbar__profileprofileRightbarInfoValue">New York</span>
                        </div>
                        <div className="profileRightbar__profileprofileRightbarInfoItem">
                            <span className="profileRightbar__profileprofileRightbarInfoKey">From:</span>
                            <span className="profileRightbar__profileprofileRightbarInfoValue">Madrid</span>
                        </div>
                        <div className="profileRightbar__profileprofileRightbarInfoItem">
                            <span className="profileRightbar__profileprofileRightbarInfoKey">Relationship:</span>
                            <span className="profileRightbar__profileprofileRightbarInfoValue">Married</span>
                        </div>
                    </div>
                    <h4 className="profileRightbar__profileprofileRightbarTitle">User friends</h4>
                    <div className="profileRightbar__profileprofileRightbarFollowings">
                        <div className="profileRightbar__profileprofileRightbarFollowing">
                            <img src={`${PF}person/1.jpeg`} alt="" className="profileRightbar__profileprofileRightbarFollowingImg" />
                            <span className="profileRightbar__profileprofileRightbarFollowingName">John Carter</span>
                        </div>
                        <div className="profileRightbar__profileprofileRightbarFollowing">
                            <img src={`${PF}person/2.jpeg`} alt="" className="profileRightbar__profileprofileRightbarFollowingImg" />
                            <span className="profileRightbar__profileprofileRightbarFollowingName">John Carter</span>
                        </div>
                        <div className="profileRightbar__profileprofileRightbarFollowing">
                            <img src={`${PF}person/3.jpeg`} alt="" className="profileRightbar__profileprofileRightbarFollowingImg" />
                            <span className="profileRightbar__profileprofileRightbarFollowingName">John Carter</span>
                        </div>
                        <div className="profileRightbar__profileprofileRightbarFollowing">
                            <img src={`${PF}person/4.jpeg`} alt="" className="profileRightbar__profileprofileRightbarFollowingImg" />
                            <span className="profileRightbar__profileprofileRightbarFollowingName">John Carter</span>
                        </div>
                        <div className="profileRightbar__profileprofileRightbarFollowing">
                            <img src={`${PF}person/5.jpeg`} alt="" className="profileRightbar__profileprofileRightbarFollowingImg" />
                            <span className="profileRightbar__profileprofileRightbarFollowingName">John Carter</span>
                        </div>
                        <div className="profileRightbar__profileprofileRightbarFollowing">
                            <img src={`${PF}person/6.jpeg`} alt="" className="profileRightbar__profileprofileRightbarFollowingImg" />
                            <span className="profileRightbar__profileprofileRightbarFollowingName">John Carter</span>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
   

export default ProfileRightbar

