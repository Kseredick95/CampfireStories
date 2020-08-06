import React from "react";
import "../StoryChoices/StoryChoices.css"

function RestartBtn(props) {

    return (
        <div id="restartBtn">
            <button className="btn btn-primary" onClick={() => props.prevPage()}>
                Previous Page
            </button>
            <button className="btn btn-secondary" onClick={() => props.restartBook()}>
                Restart Book
            </button>
        </div>
    );
};

export default RestartBtn;