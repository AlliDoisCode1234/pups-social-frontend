import React from 'react'

import './CloseFriend.css'

const CloseFriend = ({user}) => {
    return (
        <div className="closeFriend">
            <li className="closeFriend__friend">
                <img src={user.profilePicture} alt="" className="closeFriend__friendImg" />
                <span className="closeFriend__friendName">{user.username}</span>
             </li>
        </div>
    )
}

export default CloseFriend
