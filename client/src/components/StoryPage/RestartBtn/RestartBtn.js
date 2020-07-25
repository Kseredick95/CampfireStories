import React from "react";
import "../StoryChoices/StoryChoices.css"

function RestartBtn(props){

    return (
        <div> 
        <button onClick={() => props.restartBook()}>
        Restart Book
        </button>
        </div>
    )
}

export default RestartBtn