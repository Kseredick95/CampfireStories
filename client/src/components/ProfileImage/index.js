import React, { Component } from "react";
import memojiLoader from "./memojis";
import {ProfileImage} from "../Card"
import API from "../../utils/APIuser"
import store from "store"


class ProfileMemoji extends Component {
    state = { memoji: {} }

    // componentDidMount() {
    //     const memojis = memojiLoader();
    //     this.setState({memojis});
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        let user = store.get("user")
        console.log(this.state.memoji)
        user.profileImage = this.state.memoji

        API.update(user._id, user).then(res => {
            console.log(res)
            store.set("user", res.data)
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        const memoji = e.target.src;
        this.setState({ memoji })
        console.log(this.state)
        console.log(e.target.src)

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
                                            key={memoji.title}
                                            src={memoji.src}
                                            alt={memoji.alt} />
                                    </button>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick = {this.handleSubmit}>Save changes</button>
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