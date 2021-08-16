import React from "react"
import Feed from '../../components/feed/Feed'
import Rightbar from "../../components/Rightbar/Rightbar"

import Sidebar from '../../components/sidebar/Sidebar'

import Topbar from '../../components/topbar/Topbar'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Topbar />
            <div className="home__container">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}

export default Home
