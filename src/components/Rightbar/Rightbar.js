import React, {useContext, useEffect, useState } from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from "@material-ui/icons";
// import { Link } from "react-router-dom";
import axios from "axios"




    
export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
        currentUser.followings.includes(user?.id)
    );
    
    

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends" + user._id);
                setFriends(friendList.data);
            } catch(err){
                console.log(err)
            }
        };
        getFriends();
    }, [user])


    const handleClick = async () => {
        try{
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`/users/${user._id}/follow`, {
                    user: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
            setFollowed(!followed);

        }catch(err) {
            console.log(err)
        }
    }



    const HomeRightbar = () => {
        return (
                <div>
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
                </div>   
        );
    };


    const ProfileRightbar = () => {
        
        return (
            <div>
                {user.username !== currentUser.username && (
                    <button className="rightbar__followButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                
                    <h4 className="rightbar__rightbarTitle">User information</h4>
                    <div className="rightbar__rightbarInfo">
                        <div className="rightbar__rightbarInfoItem">
                            <span className="rightbar__rightbarInfoKey">City:</span>
                            <span className="rightbar__rightbarInfoValue">{user.city}</span>
                        </div>
                        <div className="rightbar__rightbarInfoItem">
                            <span className="rightbar__rightbarInfoKey">From:</span>
                            <span className="rightbar__rightbarInfoValue">{user.from}</span>
                        </div>
                        <div className="rightbar__rightbarInfoItem">
                            <span className="rightbar__rightbarInfoKey">Relationship:</span>
                            <span className="rightbar__rightbarInfoValue">
                                {user.relationship === 1 
                                    ? "Single" 
                                    : user.relationship === 2 
                                    ? "Married" 
                                    : "-"}
                            </span>
                        </div>
                    </div>
                    <h4 className="rightbar__rightbarTitle">User friends</h4>
                    <div className="rightbar__rightbarFollowings">
                      {friends.map((friend) => (
                      
                            <div className="rightbar__rightbarFollowing">
                                {/* <img 
                                    src={
                                        friend.profilePicture
                                            ? PF + friend.profilePicture
                                            : PF + "person/noAvatar.png"
                                    } 
                                    alt="" 
                                    className="rightbar__rightbarFollowingImg" 
                                />
                                <span className="rightbar__rightbarFollowingName">{friend.username}</span> */}

                                <img
                                    src={`${PF}person/5.jpeg`}
                                    alt=""
                                    className="rightbar__rightbarFollowingImg"
                                />
                                <span className="rightbarFollowingName">Anna Durden</span>
                            </div>
                       
                      ))}
                       
                    </div>
              </div>  
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbar__wrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
   

}

