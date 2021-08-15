import React from "react"
import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"
import axios from "axios"


const Feed = ({ username }) => {
    const [posts, setPosts] = useState([])
    const [text, setText] = useState([])

    useEffect(() => {
        const fetchPosts = async () =>  {
            // const res = username 
            // ? await axios.get("/posts/profile/" + username) 
            // : await axios.get("posts/timeline/6107ba17e559768e547f3b2c")
            const res = await axios.get("posts/timeline/6107ba17e559768e547f3b2c");
            setPosts(res.data)
        }
        fetchPosts()
    }, [])
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

