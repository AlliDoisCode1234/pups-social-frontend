import React from 'react';
import {useEffect, useState} from 'react'
import './Post.css'
import { MoreVert } from "@material-ui/icons"
import axios from "axios"
import {format} from "timeago.js"
import { Link } from 'react-router-dom';



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
    }, [post.userId])


    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1) 
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__postTop">
                    <div className="post__postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="post__postTopLeftImg" />
                        </Link>
                         <span className="post__postTopLeftUsername">{user.username}</span>
                         <span className="post__postTopLeftPostDate">{format(post.createdAt)}</span>
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
                        <span className="post__bottomLeftLikeCounter">{like} people like it</span>
                    </div>
                    <div className="post__bottomRight">
                        <span className="post__bottomRightCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post


