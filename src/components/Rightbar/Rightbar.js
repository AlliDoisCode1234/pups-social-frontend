import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'




    
export default function Rightbar({ profile }) {

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
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <div>
                
                    <h4 className="rightbar__rightbarTitle">User information</h4>
                    <div className="rightbar__rightbarInfo">
                        <div className="rightbar__rightbarInfoItem">
                            <span className="rightbar__rightbarInfoKey">City:</span>
                            <span className="rightbar__rightbarInfoValue">New York</span>
                        </div>
                        <div className="rightbar__rightbarInfoItem">
                            <span className="rightbar__rightbarInfoKey">From:</span>
                            <span className="rightbar__rightbarInfoValue">Madrid</span>
                        </div>
                        <div className="rightbar__rightbarInfoItem">
                            <span className="rightbar__rightbarInfoKey">Relationship:</span>
                            <span className="rightbar__rightbarInfoValue">Married</span>
                        </div>
                    </div>
                    <h4 className="rightbar__rightbarTitle">User friends</h4>
                    <div className="rightbar__rightbarFollowings">
                        <div className="rightbar__rightbarFollowing">
                            <img src={`${PF}person/1.jpeg`} alt="" className="rightbar__rightbarFollowingImg" />
                            <span className="rightbar__rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbar__rightbarFollowing">
                            <img src={`${PF}person/2.jpeg`} alt="" className="rightbar__rightbarFollowingImg" />
                            <span className="rightbar__rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbar__rightbarFollowing">
                            <img src={`${PF}person/3.jpeg`} alt="" className="rightbar__rightbarFollowingImg" />
                            <span className="rightbar__rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbar__rightbarFollowing">
                            <img src={`${PF}person/4.jpeg`} alt="" className="rightbar__rightbarFollowingImg" />
                            <span className="rightbar__rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbar__rightbarFollowing">
                            <img src={`${PF}person/5.jpeg`} alt="" className="rightbar__rightbarFollowingImg" />
                            <span className="rightbar__rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbar__rightbarFollowing">
                            <img src={`${PF}person/6.jpeg`} alt="" className="rightbar__rightbarFollowingImg" />
                            <span className="rightbar__rightbarFollowingName">John Carter</span>
                        </div>
                    </div>
              </div>  
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbar__wrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
   

}

