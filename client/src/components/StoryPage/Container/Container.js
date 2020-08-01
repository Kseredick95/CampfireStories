import React, { Component } from "react";
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices";
<<<<<<< HEAD
import RestartBtn from "../RestartBtn/RestartBtn";
import API from "../../../utils/API_book"
=======
//import StoryItems from "../../../story-one.json";
import RestartBtn from "../RestartBtn/RestartBtn";
//import API from "../../../utils/API_book";
>>>>>>> d02fc55fb305512a1574f5e21a983d44634b362b

class StoryPage extends Component {

    state = {
        book: [],
        page: { },
        prevPage: {}
    }

//     achievements: [
//         {achievement: "At what cost..."},
//     {achievement: "At what cost..."},
//     {achievement: "At what cost..."}
// ]

//     const achievement=this.state.page.achievement
//     if(achievement) {this.setState({achievement: achievement})}
//     pull the user... add the achievements array items to the user.achievements... push the user info


    componentDidMount() {
        API.getSavedBooks()
        .then(res => {this.setState({ book: res.data, page: res.data[0] })})
        .catch(err => console.log(err))
    }

    choiceSubmit = e => {
        const choice = this.state.book.find(choice => {
            console.log(choice)
            return choice.id === e
        })
        this.setState({ prevPage: this.state.page, page: choice })
    }

    restartBook = e => {
        this.setState({ page: this.state.book[0] })
    }

    prevPage = e =>{
        this.setState({page: this.state.prevPage})
    }

    render() {
        return ( <div className = "container" >
            { this.state.page.image?
            <StoryImg image = { this.state.page.image }/> :
             <div></div>}

            {this.state.page.text?
            <StoryText text = { this.state.page.text }/>:
            <div></div>}
            
             
            {this.state.page.choices?
            this.state.page.choices.map(choice => <StoryChoices key = { choice.id }
                id = { choice.id }
                text = { choice.text }
                choiceSubmit = { this.choiceSubmit }
                />
            ) : <RestartBtn restartBook={this.restartBook} prevPage={this.prevPage}/>
        }
        
        </div>
    )
}
}

export default StoryPage