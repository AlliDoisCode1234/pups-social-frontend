import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Topbar />
            <div className="home__Container">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}

export default Home
