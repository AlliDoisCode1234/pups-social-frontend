import React, { useState, useEffect } from 'react'
import Feed from '../../components/feed/Feed'
import axios from "axios"

import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { useParams } from "react-router";

import "./Profile.css"

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
        }
        fetchUser()
    }, [])
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile__right">
                    <div className="profile__rightTop">
                        <div className="profile__rightTopCover">
                            <img src={`${PF}post/3.jpeg`}alt="" className="profile__rightTopCoverImg" />
                            <img src={`${PF}person/7.jpeg`} alt="" className="profile__rightTopUserImg" />
                        </div>
                        <div className="profile__rightTopInfo">
                            <h4 className="profile_rightTopInfoName">{user.username}</h4>
                            <span className="profile_rightTopInfoDesc">{user.desc}</span>

                        </div>
                    </div>
                    <div className="profile__rightBottom">
                        <Feed username={username}/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
