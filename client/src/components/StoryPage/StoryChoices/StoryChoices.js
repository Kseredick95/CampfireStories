import React from "react";
import "./StoryChoices.css"

function StoryChoices(props){


    return (
        <div> 
        <button onClick={e=>props.choiceSubmit(props.id)}>
        {props.text}
        </button>
        </div>
    )
}

export default StoryChoices