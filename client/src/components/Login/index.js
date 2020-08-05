import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/APIuser";
import store from "store";

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
<<<<<<< HEAD
        password: "",
      },
    };
=======
        password: ""
      },
      isLoggedIn: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
>>>>>>> a1d4d1bf697261f726817efc1f50a696c3769b1b
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props
    
    API.loginUser({
      email: this.state.email,
<<<<<<< HEAD
      password: this.state.password,
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
=======
      password: this.state.password
    }).then(res => {
      console.log(res.data._id)

      if(res.data) {
        this.setState({
          email: res.data.email,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          username: res.data.username,
          deathCount: res.data.deathCount,
          profileImage: res.data.profileImage,
          achievements: res.data.achievements,
          isLoggedIn: true })

        store.set(`loggedIn`, true);
        history.push(`/profile/${res.data._id}`)
      }
    })
  }

>>>>>>> a1d4d1bf697261f726817efc1f50a696c3769b1b

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

            <div className="createAccount">
              <button type="submit">Sign In</button>
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
