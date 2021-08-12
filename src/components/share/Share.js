import React from 'react'
import "./Share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

const Share = () => {
    return (
        <div className="share">
            <div className="share__wrapper">
                <div className="share__top">
                    <img src="/assets/person/1.jpeg" alt="" className="share__profileImg" />
                    <input placeholder="What did your puppy do today?" type="text" className="share__topInput" />
                </div>
                <hr className="share__hr"/>
                <div className="share__bottom">
                    <div className="share__bottomOptions">
                        <div className="share__bottomOptionsOption">
                            <PermMedia className="share__bottomOptionsOptionIcon" htmlColor="tomato" />
                            <span className="share__bottomOptionsOptionText">Photo or Video</span>
                        </div>
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
                    <button className="share__bottomButton">share </button>
            

                </div>
            </div>
        </div>
    )
}

export default Share
