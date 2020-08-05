import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/APIuser";
import store from "store";

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
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
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
      Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - SEE ERROR MESSAGES");
      return;
    }    

    API.saveUser({
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      deathCount: 0,
      achievements: [{
        name : "newUserAchievement",
        date : Date.now()
      }],
      profileImage: null
    }).then( res => {
       const { history } = this.props;

       store.set(`loggedIn`, true);
       history.push(`/profile/${res.data._id}`);
      
    }).catch(err => console.log(err));
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
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {
              //Input for First Name
            }
            <div className="firstName">
              <label htmlFor="firstName"> First Name</label>
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
              <label htmlFor="lastName"> Last Name</label>
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
              <label htmlFor="email"> Email</label>
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
              //Form input for Password
            }
            <div className="password">
              <label htmlFor="password"> Password</label>
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
