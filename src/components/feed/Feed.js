import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"
import axios from "axios"


const Feed = () => {
    const [posts, setPosts] = useState([])
    const [text, setText] = useState([])

    useEffect(() => {
        const fetchPosts = async () =>  {
            const res = await axios.get("posts/timeline/6107ba0de559768e547f3b2a")
            setPosts(res.data)
        }
        fetchPosts()
    }, [])
    return (
        <div className="feed">
            <input type="text" className="feed__input" onChange={e=>setText(e.target.value)} />
            <div className="feed__wrapper">
                <Share />
                {posts.map((p) =>(
                    <Post
                        key={p.id} 
                        post={p}
                    />

                ))}
               
            </div>
        </div>
    )
}

export default Feed

