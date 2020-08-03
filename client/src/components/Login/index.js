import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/APIuser";

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
        password: ""
      }
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();

    API.loginUser({
      email: this.state.email,
      password: this.state.password
    })
    .then(function(res) {
      console.log(res)
      //window.location.replace("/profile")
    }).catch(function(err) {
      console.log(err)
    })
  }


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

            {
              //Create Account Button
            }
            <div className="createAccount">
              <button type="submit"> Sign In </button>
              <Link to="/register">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
