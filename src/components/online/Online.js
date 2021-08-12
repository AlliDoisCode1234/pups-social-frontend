import React from 'react'
import "./Online.css"

const Online = ({user}) => {
    return (
        <div className="online">
                    <li className="online__friend">
                        <div className="online__profileImgContainer">
                            <img src={user.profilePicture} alt="" className="online__profileImg" />
                            <span className="online__online"></span>
                        </div>
                        <span className="online__username">{user.username}</span>
                    </li>                
        </div>
    )
}

export default Online
