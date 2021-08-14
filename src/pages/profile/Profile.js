import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

import "./Profile.css"

const Profile = () => {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile__right">
                    <div className="profile__rightTop">
                        <div className="profile__rightTopCover">
                            <img src="assets/post/3.jpeg" alt="" className="profile__rightTopCoverImg" />
                            <img src="assets/person/7.jpeg" alt="" className="profile__rightTopUserImg" />
                        </div>
                        <div className="profile__rightTopInfo">
                            <h4 className="profile_rightTopInfoName">Josiah James</h4>
                            <span className="profile_rightTopInfoDesc">Hello my friends! </span>

                        </div>
                    </div>
                    <div className="profile__rightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
