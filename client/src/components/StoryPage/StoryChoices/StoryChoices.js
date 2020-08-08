import React from "react";
import "./StoryChoices.css"

function StoryChoices(props) {
    return (
        <div className={props.className} id="storyChoices">
            <button className="btn btn-primary" onClick={e => props.choiceSubmit(props.id)}>
                {props.text}
            </button>
        </div>
    );
};

export default StoryChoices;