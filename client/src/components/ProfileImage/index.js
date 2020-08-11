import React, { Component } from "react";
import memojiLoader from "./memojis";
import { ProfileImage } from "../Card"
import API from "../../utils/APIuser"
import store from "store"


class ProfileMemoji extends Component {
    state = { 
        memoji: {},
        user: {} }

    handleSubmit = (e) => {
        e.preventDefault();
        let user = this.state.user;

        API.update(user._id, user).then(res => {
            console.log(res);
            window.location.replace("/profile/" + user._id)
        })
        store.set("user", user)
    }

    handleChange = (e) => {
        e.preventDefault();
        let user = this.state.user;
        const memoji = e.target.src;
        user.profileImage = memoji;
        this.setState({ memoji: memoji, user: user });
    }

    componentDidMount() {
        let user = store.get("user");
        const memoji = user.profileImage;

        this.setState({memoji: memoji, user: user});
    }

    render() {
        return (
            <div>
                <a className="action" data-toggle="modal" href="#memojisModal">Edit Profile</a>

                <div className="modal" id="memojisModal" data-easein="fade" tabIndex="-1" role="dialog" aria-labelledby="memojisModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="memojisModalLabel">Modify Profile Picture</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {memojiLoader().map(memoji => (
                                    <button type="button" onClick={this.handleChange}>
                                        <ProfileImage
                                            src={memoji.src}
                                            alt={memoji.alt} />
                                    </button>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick = {this.handleSubmit}>Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileMemoji;