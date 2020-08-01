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
    console.log(this.state.email)

    let email = this.state.email

    API.getEmail(email).then(res =>
      console.log(res.data)
    )
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
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {
              //Input for First Name
            }
            <div className="email">
              <label htmlFor="email"> Email</label>
              <input
                className=""
                placeholder="email"
                type="email"
                name="email"
                formNoValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="password">
              <label htmlFor="password"> Password</label>
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
