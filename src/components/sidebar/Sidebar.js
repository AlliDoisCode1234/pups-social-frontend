import React from 'react'
import "./Sidebar.css"
import { RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School, } from "@material-ui/icons"
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <ul className="sidebar__wrapperList">
                    <li className="sidebar__wrapperListItem">
                        <RssFeed className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Feed</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <Chat className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Chats</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <PlayCircleFilledOutlined className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Videos</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <Group className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Groups</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <Bookmark className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <HelpOutline className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Questions</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <WorkOutline className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Jobs</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <Event className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Events</span>
                    </li>
                    <li className="sidebar__wrapperListItem">
                        <School className="sidebar__wrapperListItemIcon" />
                        <span className="sidebar__wrapperListItemText">Courses</span>
                    </li>
                </ul>
                <div className="sidebar__button">Show More</div>
                <hr className="sidebar__hr"/>
                <ul className="sidebar__friendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
