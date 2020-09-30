import React, { Component } from "react";
import { Row, RowMt, Container } from "../../Toolkit/Grid";
import Navbar from "../../Toolkit/Navbar";
import StoryImg from "../StoryImg/StoryImg";
import StoryText from "../StoryText/StoryText";
import StoryChoices from "../StoryChoices/StoryChoices";
import RestartBtn from "../RestartBtn/RestartBtn";
import API from "../../../utils/API_book";
import userAPI from "../../../utils/APIuser";
import store from "store";
import { storyPageHelpers } from "../../../helpers/StoryPageHelpers";
import Reward from "react-rewards";
import colorsArray from "./rewardColorsArray";
import "./Reward.css";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

class StoryPage extends Component {
  
  state = {
    book: [],
    page: {},
    prevPage: {},
    user: {},
    death: 0,
    rewardDisabled: false
  };

  componentWillMount() {
    const {
      computedMatch: { params },
    } = this.props;
    var user = store.get("user");
    if (user.lastBook === null || isEmpty(user.lastBook) === true || user.lastBook.bookTitle !== params.bookTitle) {
      API.findByTitle(`${params.bookTitle}`)
        .then((res) => {
          this.setState({
            user: user,
            book: res.data.bookPages,
            page: res.data.bookPages[0],
          });
        })
        .catch((err) => console.log(err));
      } else {
      this.setState({
        user: user,
        book: user.lastBook.bookPages,
        page: user.lastBook.currentPage,
      });
    }
  }

  componentWillUnmount() {
    const {
      computedMatch: { params },
    } = this.props;
    const user = this.state.user;
    const lastBookInfo = {
      bookTitle: params.bookTitle,
      bookPages: this.state.book,
      currentPage: this.state.page,
    };
    user.lastBook = {};
    user.lastBook = lastBookInfo;
    userAPI
      .update(user._id, user)
      // .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    store.set("user", user);
  }

  choiceSubmit = (e) => {
    const {
      computedMatch: { params },
    } = this.props;
    console.log(params.bookTitle)
    const choice = this.state.book.find((choice) => {
      return choice.id === e;
    });
    const user = this.state.user;
    var helpers = storyPageHelpers()
    helpers.completedBooksCheck(choice, user);
    helpers.achievementsCheck(choice, user);
    store.set("user", user);
    this.setState({ prevPage: this.state.page, page: choice });
    // Death increment and storing
    if (choice.death === "true") {
      user.deathCount += 1;
      var userDeath = user.deathCount;
      this.setState({ userDeath: userDeath });
    }

    store.set("user", user);
  };

  restartBook = (e) => {
    const user = this.state.user;
    user.lastBook = {};
    this.setState({ page: this.state.book[0], user: user });
  };

  prevPage = (e) => {
    this.setState({ page: this.state.prevPage });
  };

  rewardPlayer = () => {
    this.setState({
        rewardDisabled:true
    });
    setTimeout(() => this.setState({ rewardDisabled: false}), 3000);
    this.reward.rewardMe()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            {this.state.page.image ? (
              <StoryImg image={this.state.page.image} />
            ) : (
              <div id="reward" className="d-flex justify-content-center container">
              <div className="col-3"></div>
              <div className="col-6">
                <img id="rewardImg" src={process.env.PUBLIC_URL + "/images/CampfireLogo.png"}
              alt="Campfire Stories Logo"></img>
              <Reward ref={(ref) => { this.reward = ref }} type='confetti' config={{spread: 360, elementCount: 200, elementSize: 8, lifetime: 280, colors: colorsArray}} >
                <button id="rewardBtn" className="btn btn-outline-success btn-lg" disabled={this.state.rewardDisabled} onClick={this.rewardPlayer} >
                  click for your reward
                </button>
              </Reward>
              </div>
              <div className="col-3"></div>
              </div>
            )}
          </Row>
          <Row>
            {this.state.page.text ? (
              <StoryText text={this.state.page.text} />
            ) : (
                <div></div>
              )}
          </Row>
          <div id="choiceAlign">
            <RowMt size="12">
              {this.state.page.choices ? (
                this.state.page.choices.map((choice) => (
                  <StoryChoices
                    className="col-md"
                    key={choice.id}
                    id={choice.id}
                    text={choice.text}
                    choiceSubmit={this.choiceSubmit}
                  />
                ))
              ) : (
                  <RestartBtn
                    restartBook={this.restartBook}
                    prevPage={this.prevPage}
                  />
                )}
              {/* <p>Death Count: {this.state.user.deathCount}</p> */}
            </RowMt>
          </div>
        </Container>
      </div>
    );
  }
}
export default StoryPage;