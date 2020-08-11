import React, { setState } from "react";
import { RowMt, Col, Column, Row } from "../Grid";
import ProfileMemoji from '../ProfileImage/index';
import memojiLoader from '../ProfileImage/memojis';
import API from '../../utils/APIuser';
import "./style.css";
// export card whose id is user
export function UserCard(props) {
    // Date user was created
    const createdDate = new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date(props.value.achievements[0].date));

    // let state = {
    //     memojiSelect: 
    // }

    return (
        <div className="card" id="user">
            <div className="card-header">
                Profile ID: {props.value.id}
            </div>
            <ProfileMemoji />
            {/* Edit Profile Modal */}
            {/* <div className="modal" id="memojisModal" data-easein="fade" tabIndex="-1" role="dialog" aria-labelledby="memojisModalLabel" aria-hidden="true">
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
                                <button type="button" onClick={this.setState({memojiSelect:this})}>
                                    <ProfileImage
                                        src={memoji.src}
                                        alt={memoji.alt} />
                                </button>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <ProfileImage /> */}
            <div id="userImage">
                <img src={props.value.profileImage} alt="" />
            </div>
            <div className="card-block">
                <h4 className="card-title">Welcome, {props.value.firstname} </h4>
                <RowMt size="2">
                    <Col size="1">
                        <i className="fas fa-medal"></i>
                    </Col>
                    <Column><strong>Achievments:</strong><br />
                        <div id="medal-list">
                            {props.value.achievements.map(medal => (
                                <Achievement
                                    key={medal._id}
                                    id={medal._id}
                                    name={medal.name}
                                    date={medal.date}
                                />
                            ))}
                        </div>
                    </Column>
                </RowMt>
                <RowMt size="2">
                    <Col size="1"><i className="fas fa-envelope"></i></Col>
                    <Column>{props.value.email}</Column>
                </RowMt>
                <RowMt size="2">
                    <Column>Joined: {createdDate}</Column>
                </RowMt>
            </div>
        </div>
    );
}

// export card whose id is connections
export function ConnectCard() {
    return (
        <div className="card" id="connections">
            <div className="card-header">
                <div className="label">All Stories</div><a className="action" href="/library">Find</a>
            </div>
            <div className="list d-flex justify-content-between flex-wrap">
                {/* <img className="list-item" alt="" />
                <img className="list-item" alt="" />
                <img className="list-item" alt="" />
                <img className="list-item" alt="" /> */}
            </div>
        </div>
    );
}

export function UserBooks(props) {
    return (
        <Column>
            <div className="row no-gutters align-content-center">
                <Column classType="icon"><i className="fas fa-book-reader fa-2x"></i></Column>
                <Column classType="activity-text">You're last completed book <em>NAME GOES HERE</em>
                </Column>
            </div>
        </Column>
    );
}


// export recent activity card
export function HistoryCard(props) {
    return (
        <div className="card" id="recentActivity">
            <div className="card-header">Recent Activity</div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row no-gutters">
                        <UserBooks />
                        <Column classType="right">
                            <div className="row no-gutters justify-content-center align-items-center">
                                <div className="view"><button className="btn btn-primary">Resume</button></div>
                                <div className="text-center">5 Days Ago</div>
                            </div>
                        </Column>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row no-gutters">
                        <Column>
                            <div className="row no-gutters align-content-center">
                                <Column classType="icon"><i className="fas fa-book fa-2x"></i></Column>
                                <Column classType="activity-text">You have recently completed <em>story name goes
                                    here</em></Column>
                            </div>
                        </Column>
                        <Column classType="right">
                            <div className="row no-gutters justify-content-center align-items-center">
                                <div className="view"><button className="btn btn-primary">Again</button></div>
                                <div className="text-center">7 Days Ago</div>
                            </div>
                        </Column>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export function Achievement(props) {
    console.log(props)
    return (
        <i className="fas fa-file-signature" data-toggle="tooltip" data-placement="top"
            title={props.name}
            id={props.id}></i>
    )
}

export function ProfileImage(props) {

    return (
        <div>
            <img src={props.src}
                alt={props.alt}
            />
        </div>
    );
}