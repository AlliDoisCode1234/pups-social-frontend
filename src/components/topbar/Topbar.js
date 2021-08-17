import React, { useContext } from 'react';
import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Topbar = () => {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        
        <div className="topbar">
            <div className="topbar__left">
                <Link to="/">
                    <img src="https://i.imgur.com/9LEj4L5.png" alt="" className="topbar__logo" />
                </Link>
                
            </div>
            <div className="topbar__center">
                <div className="topbar__centerSearchbar">
                    <Search className="topbar__centerSearchIcon"/>
                    <input placeholder="Search for friend, post or video" type="text" className="topbar__centerSearchInput" />
                </div>
            </div>
            <div className="topbar__right">
                <div className="topbar__rightLinks">
                    <span className="topbar__rightLinksLink">Homepage</span>
                    <span className="topbar__rightLinksLink">Timeline</span>
                </div>
                <div className="topbar__rightIcons">
                    <div className="topbar__rightIconsItem">
                        <Person />
                        <span className="topbar__rightIconsBadge">1</span>
                    </div>
                    <div className="topbar__rightIconsItem">
                        <Chat />
                        <span className="topbar__rightIconsBadge">2</span>
                    </div>
                    <div className="topbar__rightIconsItem">
                        <Notifications />
                        <span className="topbar__rightIconsBadge">7</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}> 
                    <img src={
                        user.profilePicture 
                            ? PF + user.profilePicture 
                            : PF + "person/noAvatar.png" 
                        } 
                        alt="" 
                        className="topbar__rightImg" 
                    />
                </Link>
            </div>
        </div>
    )
}

export default Topbar
