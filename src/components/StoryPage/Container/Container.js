import React from "react";
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices"

function StoryPage(){
    return(
        <div>
        <StoryImg/>
        <StoryText />
        <StoryChoices />
</div>
    )
}

export default StoryPage
