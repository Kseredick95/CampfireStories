import React, {useState} from "react";
import "./StoryChoices.css"

function StoryChoices(){

const [choice, setChoice] = useState("");

const choiceSubmit = event => {
    event.preventDefault();
    setChoice(event.target.innerHTML)
    console.log(choice)
}



    return (
        <div>
        
        <button onClick={choiceSubmit}>
        Do Stuff
        </button>
        
        <button onClick={choiceSubmit}>
        Do Other Stuff
        </button>
        
        <button onClick={choiceSubmit}>
        Do More Stuff
        </button>
        
        <button onClick={choiceSubmit}>
        Do Even More Stuff
        </button>
        
        </div>
    )
}

export default StoryChoices