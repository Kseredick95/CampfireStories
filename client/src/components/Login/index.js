import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Login extends Component {
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
              <Link to="/storypage">Story Page</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
