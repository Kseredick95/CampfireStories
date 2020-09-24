import React, { Component } from "react";
import NavbarTwo from "../NavbarTwo";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/APIuser";
import store from "store";
import Alert from "react-bootstrap/Alert";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
      },
      isLoggedIn: false,
      invalidAlert: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;

    API.loginUser({
      email: this.state.email,
      password: this.state.password,
    })
      .then((res) => {
        if (res.data) {
          store.set(`user`, {
            _id: res.data._id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            username: res.data.username,
            achievements: res.data.achievements,
            deathCount: res.data.deathCount,
            profileImage: res.data.profileImage,
            lastBook: res.data.lastBook,
            completedBooks: res.data.completedBooks,
            loggedIn: true,
          });
          history.push(`/profile/${res.data._id}`);
        }
      })
      .catch((error) => {
        if (error) this.setState({ invalidAlert: true });
      });
  };

  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    return (
      <div className="wrapper">
        <NavbarTwo />
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                className=""
                placeholder="Email"
                type="email"
                name="email"
                formNoValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="password">
              <label htmlFor="password"></label>
              <input
                className=""
                placeholder="Password"
                type="password"
                name="password"
                formNoValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="createAccount">
              <button type="submit">Sign In</button>
              <Link to="/register">Create an account</Link>
            </div>
          </form>
        </div>
        <Alert show={this.state.invalidAlert} variant="danger">
          Invalid email and/or password
        </Alert>
      </div>
    );
  }
}

export default Login;
