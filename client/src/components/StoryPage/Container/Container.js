import React, {Component} from "react";
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices";
import StoryItems from "../../../story-one.json";
import RestartBtn from "../RestartBtn/RestartBtn"

class StoryPage extends Component{
    
    state = {
        book :StoryItems,
        page : {StoryItems}
    }

    componentDidMount(){
        this.setState({page: this.state.book[0]})
    }

    choiceSubmit = e => {
const choice = this.state.book.find(choice =>{
    return choice.id === e
})
this.setState({page: choice})
console.log(choice)
    }
    
restartBook = e => {
    this.setState({page: this.state.book[0]})
}

    render(){
    return(
    <div className="container">
        <StoryImg image={this.state.page.image}/>
        <StoryText text={this.state.page.text}/>
        { this.state.page.choices ? 
        this.state.page.choices.map(choice => <StoryChoices 
        key={choice.id}
        id={choice.id}
        text={choice.text}
        choiceSubmit={this.choiceSubmit}
        />
        ) : <RestartBtn restartBook={this.restartBook}/>
        }

    </div>
    )}
}

export default StoryPage
