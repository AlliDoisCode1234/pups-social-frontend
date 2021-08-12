import React from 'react'
import './Post.css'
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../dummyData"
import { useState } from "react"

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1) 
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__postTop">
                    <div className="post__postTopLeft">
                        <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" className="post__postTopLeftImg" />
                        <span className="post__postTopLeftUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="post__postTopLeftPostDate">{post.date}</span>
                    </div>
                    <div className="post__postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="post__postCenter">
                    <span className="post__postCenterText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="post__postCenterImg" />
                </div>
                <div className="post__postBottom">
                    <div className="post__bottomLeft">
                        <img src="assets/like.png" alt="" className="post__bottomLeftIcon" onClick={likeHandler} />
                        <img src="assets/heart.png" alt="" className="post__bottomLeftIcon" onClick={likeHandler} />
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


