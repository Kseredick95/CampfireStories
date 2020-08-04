import React from "react";
import "./StoryText.css"

function StoryText(props){
    return(
        <h2>
            {props.text}
        </h2>
    )
}

export default StoryText