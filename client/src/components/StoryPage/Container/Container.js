import React, {Component} from "react";
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices";
import StoryItems from "../../../story-one.json"
class StoryPage extends Component(){
    
    render(){
    return(
    <div>
        <StoryImg/>
        <StoryText />
        <StoryChoices />
    </div>
    )}
}

export default StoryPage
