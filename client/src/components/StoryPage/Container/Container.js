import React, { Component } from "react";
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices";
import StoryItems from "../../../story-one.json";
import RestartBtn from "../RestartBtn/RestartBtn";
import API from "../../../utils/API_book"

class StoryPage extends Component {

    state = {
        book: [],
        page: { }
    }

    componentDidMount() {
        API.getSavedBooks()
        .then(res => {this.setState({ book: res.data, page: res.data[0] })})
        .catch(err => console.log(err))
    }
    // {this.setState({ book: res.data, page: res.data[0] })}
    choiceSubmit = e => {
        const choice = this.state.book.find(choice => {
            return choice.id === e
        })
        this.setState({ page: choice })
        console.log(choice)
    }

    restartBook = e => {
        this.setState({ page: this.state.book[0] })
    }

    render() {
        return ( <div className = "container" >
            { this.state.page.image?
            <StoryImg image = { this.state.page.image }/> :
             <div></div>}

            {this.state.page.text?
            <StoryText text = { this.state.page.text }/>:
            <div></div>}
            
             
            {this.state.page.choices ?
            this.state.page.choices.map(choice => <StoryChoices key = { choice.id }
                id = { choice.id }
                text = { choice.text }
                choiceSubmit = { this.choiceSubmit }
                />
            ) : <RestartBtn restartBook = { this.restartBook }/>
        }

        </div>
    )
}
}

export default StoryPage