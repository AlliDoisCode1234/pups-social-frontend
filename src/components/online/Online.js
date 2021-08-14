import React from 'react'
import "./Online.css"

const Online = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="online">
                    <li className="online__friend">
                        <div className="online__profileImgContainer">
                            <img src={PF+user.profilePicture} alt="" className="online__profileImg" />
                            <span className="online__online"></span>
                        </div>
                        <span className="online__username">{user.username}</span>
                    </li>                
        </div>
    )
}

export default Online
