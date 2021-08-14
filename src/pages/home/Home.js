import Feed from '../../components/feed/Feed'
import HomeRightbar from '../../components/homeRightbar/HomeRightbar'
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
                <HomeRightbar />
            </div>
        </div>
    )
}

export default Home
