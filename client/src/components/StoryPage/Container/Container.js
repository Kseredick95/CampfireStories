import React, { Component } from "react";
import { Container, Row, RowMt } from "../../Grid";
import Navbar from "../../Navbar"
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices";
import RestartBtn from "../RestartBtn/RestartBtn";
import API from "../../../utils/API_book";
import userAPI from "../../../utils/APIuser";
import store from "store";
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
class StoryPage extends Component {
    state = {
        book: [],
        page: {},
        prevPage: {},
        user: {}
    }
    componentWillMount() {
        const { match: { params } } = this.props
        var user = store.get("user")
        if (user.lastBook === null) {
            API.findByTitle(`${params.bookTitle}`)
                .then(res => { this.setState({ user: user, book: res.data.bookPages, page: res.data.bookPages[0] }) })
                .catch(err => console.log(err))
        }
        else if(isEmpty(user.lastBook) === true ){
            API.findByTitle(`${params.bookTitle}`)
                .then(res => { this.setState({ user: user, book: res.data.bookPages, page: res.data.bookPages[0] }) })
                .catch(err => console.log(err))
        }
        else { this.setState({ user: user, book: user.lastBook.bookPages, page: user.lastBook.currentPage }) }
    }
    componentWillUnmount() {
        const { match: { params } } = this.props;
        const user = this.state.user;
        const lastBookInfo = {
            bookTitle: params.bookTitle,
            bookPages: this.state.book,
            currentPage: this.state.page
        };
        user.lastBook = {};
        user.lastBook = lastBookInfo;
        userAPI.update(user._id, user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        store.set("user", user)
    }
    choiceSubmit = e => {
        const choice = this.state.book.find(choice => {
            return choice.id === e
        })
        const user = this.state.user
        if (choice.victory && user.completedBooks.some(obj => obj.title === choice.victory) === false) {
            user.completedBooks.push({ "title": choice.victory });
            console.log(user)
            userAPI.update(user._id, user)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }
        store.set("user", user)
        this.setState({ prevPage: this.state.page, page: choice })
    }
    restartBook = e => {
        const user = this.state.user
        user.lastBook = {};
        this.setState({ page: this.state.book[0], user: user })
    }
    prevPage = e => {
        this.setState({ page: this.state.prevPage })
    }
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        {this.state.page.image ?
                            <StoryImg image={this.state.page.image} /> :
                            <div></div>}
                    </Row>
                    <Row>
                        {this.state.page.text ?
                            <StoryText text={this.state.page.text} /> :
                            <div></div>}
                    </Row>
                    <div id="choiceAlign">
                        <RowMt size="12">
                            {this.state.page.choices ?
                                this.state.page.choices.map(choice => <StoryChoices
                                    className="col-md"
                                    key={choice.id}
                                    id={choice.id}
                                    text={choice.text}
                                    choiceSubmit={this.choiceSubmit} />
                                ) : <RestartBtn restartBook={this.restartBook} prevPage={this.prevPage} />
                            }
                        </RowMt>
                    </div>
                </Container>
            </div>
        )
    }
}
export default StoryPage