import React from "react";
import "./StoryImg.css"

function StoryImg(props) {
    return (
        <img src={props.image} alt="storyimage" id="storyImg" />
    )
}

export default StoryImg;