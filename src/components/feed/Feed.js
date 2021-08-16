import React from "react"
import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"
import axios from "axios"


const Feed = ({ username }) => {
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        const fetchPosts = async () =>  {
            const res = username 
            ? await axios.get("/posts/profile/" + username) 
            : await axios.get("posts/timeline/6107ba0de559768e547f3b2a")
            
            console.log(res)
            console.log(res.data)
            setPosts(res.data)
        }
        fetchPosts()
    }, [username])
    return (
        <div className="feed">
            <div className="feed__wrapper">
                <Share />
                {posts.map((p) =>(
                    <Post
                        key={p._id} 
                        post={p}
                    />

                ))}
               
            </div>
        </div>
    )
}

export default Feed

