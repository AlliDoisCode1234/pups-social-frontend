import React from 'react'
import "./HomeRightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'




    const HomeRightbar = ({profile}) => {
        return(
            <div className="homeRightbar">
                <div className="homeRightbar__wrapper">
                    <div className="homeRightbar__wrapperContainer">
                        <img src="assets/gift.png" alt="" className="homeRightbar__birthdayImg" />
                        <span className="homeRightbar__birthdayText"> <b>Paul Foster</b> and <b>3 other friends</b> have a birthday today</span>
                    </div>
                    <img src="assets/ad.png" alt="" className="homeRightbar__ad" />
                    <h4 className="homeRightbar__title">Online Friends</h4>
                    <ul className="homeRightbar__friendList">
                        {Users.map(u=>(
                            <Online key={u.id} user={u} />
                        ))}
                        
                    </ul>
                </div>
            </div>
        )
    }

    
    

export default HomeRightbar



//BRB