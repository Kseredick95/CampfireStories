import React, { Component } from "react";
import { Row, Column } from "../Toolkit/Grid";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/APIuser"
import store from "store";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


class ProfileCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formErrors: {
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: "",
            },
            user: {},
            firstname: {},
            lastname: {},
            username: {},
            email: {},
            bio: {}
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        let newFirstName = this.state.firstname;
        let newLastName = this.state.lastname;
        let newUsername = this.state.username;
        let newEmail = this.state.email;
        let newBio = this.state.bio;

        switch (name) {
            case "first-name":
                formErrors.firstName =
                    value.length < 2 ? "minimum 2 characters required" : "";
                newFirstName =
                    formErrors.firstName === "" ? value : this.state.user.firstname;
                break;
            case "last-name":
                formErrors.lastName =
                    value.length < 2 ? "minimum 2 characters required" : "";
                newLastName =
                    formErrors.lastName === "" ? value : this.state.user.lastname;
                break;
            case "username":
                formErrors.username =
                    value.length < 6 ? "minimum 6 characters required" : "";
                newUsername =
                    formErrors.username === "" ? value : this.state.user.username;
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                newEmail =
                    formErrors.email === "" ? value : this.state.user.email;
                break;
            case "bio":
                newBio = value;
                break;
            default:
                break;
        }

        this.setState({
            formErrors,
            [name]: value,
            firstname: newFirstName,
            lastname: newLastName,
            username: newUsername,
            email: newEmail,
            bio: newBio
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let user = this.state.user;

        if (typeof this.state.firstname == 'string') {
            user.firstname = this.state.firstname;
        }
        if (typeof this.state.lastname == 'string') {
            user.lastname = this.state.lastname;
        }
        if (typeof this.state.username == 'string') {
            user.username = this.state.username;
        }
        if (typeof this.state.email == 'string') {
            user.email = this.state.email;
        }

        API.update(user._id, user).then(res => {
            window.location.replace("/profile/" + user._id)
        })
        store.set("user", user)
    };

    componentDidMount() {
        var user = store.get("user");

        if (typeof this.state.bio == 'object') {
            var bio = "";
        } else {
            bio = this.state.bio;
        }

        this.setState({
            user: user,
            bio: bio
        })
    }

    render() {
        const { formErrors } = this.state;
        return (
            <form className="form" noValidate id="profileForm">
                <div className="row" style={{ display: "contents" }}>
                    <Column>
                        <Row>
                            <Column>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input className="form-control" type="text" name="first-name" defaultValue={this.state.user.firstname} autoComplete="first_name" onChange={this.handleChange} />
                                    {formErrors.firstName.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstName}</span>
                                    )}
                                </div>
                            </Column>
                            <Column>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input className="form-control" type="text" name="last-name" defaultValue={this.state.user.lastname} autoComplete="last-name" onChange={this.handleChange} />
                                    {formErrors.lastName.length > 0 && (
                                        <span className="errorMessage">{formErrors.lastName}</span>
                                    )}
                                </div>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" type="text" name="username" defaultValue={this.state.user.username} autoComplete="username" onChange={this.handleChange} />
                                    {formErrors.username.length > 6 && (
                                        <span className="errorMessage">{formErrors.username}</span>
                                    )}
                                </div>
                            </Column>
                            <Column>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="text" name="email" defaultValue={this.state.user.email} autoComplete="email" onChange={this.handleChange} />
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                            </Column>
                        </Row>
                        <div className="row" style={{ display: "inline-block", float: "right" }} id="saveProfileEdit">
                            <Column classType="mb-3">
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Save Changes</button>
                                <Link to={"/profile/" + this.state.user._id}>
                                    <button className="btn btn-secondary"> Close </button>
                                </Link>
                            </Column>
                        </div>

                        {/* <Row>
                            <Column classType="mb-3">
                                <div className="form-group">
                                    <label>About Me</label>
                                    <textarea className="form-control" name="bio" rows="5" placeholder="My Bio" onChange={this.handleChange} value={this.state.bio} />
                                </div>
                            </Column>
                        </Row> */}
                    </Column>
                </div>
                {/* <div className="row" style={{ display: "contents" }}>
                    <Col size="12 col-sm-6 mb-3">
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#passwordForm"
                            aria-expanded="false" aria-controls="passwordForm">
                            <b>Change Password</b>
                        </button>
                        <div className="collapse" id="passwordForm">
                            <Row>
                                <Column>
                                    <div className="form-group">
                                        <label>Current Password</label>
                                        <input className="form-control" type="password" placeholder="••••••••••••" autoComplete="current-password" />
                                    </div>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input className="form-control" type="password" placeholder="••••••••" autoComplete="new-password" />
                                    </div>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <div className="form-group">
                                        <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                        <input className="form-control" type="password" placeholder="••••••••" autoComplete="new-password" />
                                    </div>
                                </Column>
                            </Row>
                        </div>
                    </Col>
                </div> */}
                {/* <div className="row" style={{ display: "inline-block" }} id="saveProfileEdit">
                    <Column classType="d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Save Changes</button>
                        <Link to={"/profile/" + this.state.user._id}>
                            <button className="btn btn-secondary"> Close </button>
                        </Link>
                    </Column>
                </div> */}
            </form>
        );
    }
}

export default ProfileCard;