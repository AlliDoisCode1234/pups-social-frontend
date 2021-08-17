import React, { useContext, useRef, useState } from 'react'
import "./Share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"

const Share = () => {

    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();

    const [file, setFile] = useState(null);

    const submitHandler = async (e) =>{
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc:  desc.current.value
        }
        if(file){
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append("file",file)
            data.append("name",fileName)
            newPost.img = fileName;
            try{
                await axios.post("/upload", data)
            }catch(err) {
                console.log(err)
            }
        }

    try{

       await axios.post("/posts", newPost)
       window.location.reload();
    }catch(err){
        console.log(err)
    }

}

    return (
        <div className="share">
            <div className="share__wrapper">
                <div className="share__top">
                    <img src={user.profilePicture ? PF+ user.profilePicture : PF + "person/noAvatar.png"} alt="" className="share__profileImg" />
                    <input 
                        placeholder={"What did your puppy do today "+user.username+"?"} 
                        type="text" 
                        className="share__topInput" 
                        ref={desc}
                    />
                </div>
                <hr className="share__hr"/>
                <form className="share__bottom" onSubmit={submitHandler}>
                    <div className="share__bottomOptions">
                        <label htmlFor="file" className="share__bottomOptionsOption">
                            <PermMedia className="share__bottomOptionsOptionIcon" htmlColor="tomato" />
                            <span className="share__bottomOptionsOptionText">Photo or Video</span>
                            <input style={{display: "none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])}></input>
                        </label>
                        <div className="share__bottomOptionsOption">
                            <Label className="share__bottomOptionsOptionIcon" htmlColor="blue"/>
                            <span className="share__bottomOptionsOptionText">Tag</span>
                        </div>
                        <div className="share__bottomOptionsOption">
                            <Room className="share__bottomOptionsOptionIcon" htmlColor="green"/>
                            <span className="share__bottomOptionsOptionText">Location</span>
                        </div>
                        <div className="share__bottomOptionsOption">
                            <EmojiEmotions className="share__bottomOptionsOptionIcon" htmlColor="gold"/>
                            <span className="share__bottomOptionsOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="share__bottomButton" type="submit">Share</button>
            

                </form>
            </div>
        </div>
    )
}

export default Share
