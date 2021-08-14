import React from 'react';
import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom";

const Topbar = () => {
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
                <img src="/assets/person/1.jpeg" alt="" className="topbar__rightImg" />
            </div>
        </div>
    )
}

export default Topbar
