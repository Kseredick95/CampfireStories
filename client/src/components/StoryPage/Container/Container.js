import React, { Component } from "react";
import { Container, Row} from "../../Grid";
import Navbar from "../../Navbar"
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices";
import RestartBtn from "../RestartBtn/RestartBtn";
import API from "../../../utils/API_book";
import store from "store";

class StoryPage extends Component {
   
    state = {
        book: [],
        page: { },
        prevPage: {},
        user: {}
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
        const {match: {params}} = this.props
        var user = store.get("user")

        API.findByTitle(`${params.bookTitle}`)
        .then(res => {this.setState({user:user, book: res.data.bookPages, page: res.data.bookPages[0] })})
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

    // bookComplete = e =>{
    //     let user = this.state.user
    //     var completed = user.completedBooks += this.state.page.victory
    //     console.log(user)
    //     if(this.state.page.victory){user.setState({...user, completedBooks: completed})}
    //     else{ return}
    //     console.log(user)
    // }

    render() {
        return ( <div className = "container" >
        <Container>
        <Navbar></Navbar>
        <Row>
            {this.state.page.image?
            <StoryImg image = { this.state.page.image }/> :
            <div></div>}
        </Row>
        <Row>
            {this.state.page.text?
            <StoryText text = { this.state.page.text }/>:
            <div></div>}
        </Row>
        <Row>
            {this.state.page.choices?
            this.state.page.choices.map(choice => <StoryChoices         
            className="col" 
            key = { choice.id }
            id = { choice.id }
            text = { choice.text }
            choiceSubmit = { this.choiceSubmit }
            />
            ) : <RestartBtn restartBook={this.restartBook} prevPage={this.prevPage}/>
        }
        </Row>
        </Container>
        </div>
    )
}
}

export default StoryPage