import React from 'react';
import {useEffect, useState} from 'react'
import './Post.css'
import { MoreVert } from "@material-ui/icons"
import axios from "axios"



const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
        const fetchUser = async () =>  {
            const res = await axios.get(`users/${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [])


    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1) 
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__postTop">
                    <div className="post__postTopLeft">
                        <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="post__postTopLeftImg" />
                        <span className="post__postTopLeftUsername">{user.username}</span>
                        {/* <TimeAgo className="post__postTopLeftPostDate" date={post.createdAt} /> */}
                        {/* <TimeAgo className="post__postTopLeftPostDate" date="Aug 29, 2014" /> */}
                        

                        {/* <span className="post__postTopLeftPostDate">{post.date}</span> */}
                    </div>
                    <div className="post__postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="post__postCenter">
                    <span className="post__postCenterText">{post.desc}</span>
                    <img src={PF+post.img} alt="" className="post__postCenterImg" />
                </div>
                <div className="post__postBottom">
                    <div className="post__bottomLeft">
                        <img src={`${PF}like.png`} alt="" className="post__bottomLeftIcon" onClick={likeHandler} />
                        <img src={`${PF}heart.png`} alt="" className="post__bottomLeftIcon" onClick={likeHandler} />
                        <spn className="post__bottomLeftLikeCounter">{like} people like it</spn>
                    </div>
                    <div className="post__bottomRight">
                        <snap className="post__bottomRightCommentText">{post.comment} comments</snap>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post


