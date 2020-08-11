import React, { Component } from "react";
import NavbarTwo from "../NavbarTwo";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/APIuser";
import store from "store";

// const selectMemoji = () => {
//   const memojiFolder = process.env.PUBLIC_URL + '/images/MemojiPack';
//   let memoji = fs.readdirSync(memojiFolder);
//   return memoji[Math.floor(Math.random() * memoji.length)];
// }

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  //validating form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  //validating form was filled
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      ---SUBMITTING---
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Username: ${this.state.username}
      Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - SEE ERROR MESSAGES");
      return;
    }

    API.saveUser({
      created: Date.now(),
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      deathCount: 0,
      achievements: [
        {
          name: "New user achievement",
          description: "Achieved by signing up",
          date: Date.now(),
        },
      ],
      profileImage: null,
      lastBook: null,
      completedBooks: [],
    })
      .then((res) => {
        const { history } = this.props;

        store.set(`user`, {
          created: res.data.created,
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
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "minimum 2 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "minimum 2 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "username":
        formErrors.username =
          value.length < 6 ? "minimum 6 characters required" : "";
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
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <NavbarTwo />
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {
              //Input for First Name
            }
            <div className="firstName">
              <label htmlFor="firstName"></label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            {
              //Form input for Last Name
            }
            <div className="lastName">
              <label htmlFor="lastName"></label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            {
              //Form input for Email
            }
            <div className="email">
              <label htmlFor="email"></label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            {
              //Form input for Username
            }
            <div className="username">
              <label htmlFor="username"></label>
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username"
                type="username"
                name="username"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 6 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            {
              //Form input for Password
            }
            <div className="password">
              <label htmlFor="password"></label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            {
              //Create Account Button
            }
            <div className="createAccount">
              <button type="submit"> Create Account </button>
              <Link to="/login">Already Have an Account?</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
