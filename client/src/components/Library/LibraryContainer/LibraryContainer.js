import React, { Component } from "react";
import { Container, Row } from "../../Toolkit/Grid";
import Navbar from "../../Toolkit/Navbar/index";
import BookCard from "../BookCard/BookCard";
import API from "../../../utils/API_book";
import store from "store";
import "./LibraryContainer.css";

class LibraryContainer extends Component {
  state = {
    library: [],
    user: {},
  };
  componentDidMount() {
    var user = store.get("user");
    API.getLibrary()
      .then((res) => {
        this.setState({ library: res.data, user: user });
      })
      .catch((err) => console.log(err));
  }
  restartBook = (e) => {
    const user = this.state.user;
    user.lastBook = {};
    store.set("user", user);
  };
  render() {
    return (
      <div id="main">
        <Navbar />
        <Container>
          <Row>
            {this.state.library.map((book) => (
              <BookCard
                key={book.bookTitle}
                id={book._id}
                bookTitle={book.bookTitle}
                restartBook={this.restartBook}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default LibraryContainer;
