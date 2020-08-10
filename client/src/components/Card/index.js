import React from "react";
import {Link} from "react-router-dom"
import { RowMt, Col, Column } from "../Grid";
import "./style.css";

// export card whose id is user
export function UserCard(props) {
    return (
        <div className="card" id="user">
            <div className="card-header">
                Profile ID: {props.value._id}<a className="action" data-toggle="modal" href="#profileModal">Edit Profile</a>
            </div>
            {/* Edit Profile Modal */}
            <div className="modal" id="profileModal" data-easein="bounceIn" tabIndex="-1" role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="profileModalLabel">Modify Profile</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <img id="userImage" alt="" />
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
                                    description={medal.description}
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
                    <Column>Joined: {props.value.created.split("T")[0]}</Column>
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
                <div className="label">All Stories</div><a className="action" href="/#">Find</a>
            </div>
            <div className="list d-flex justify-content-between flex-wrap">
                <img className="list-item" alt="" />
                <img className="list-item" alt="" />
                <img className="list-item" alt="" />
                <img className="list-item" alt="" />
            </div>
        </div>
    );
}

// export the acivity for appending and prepending purposes
// need props of the icon, timestamp

/* 
export function UserActivity(props) {
    return (
        <div className="row no-gutters">
            <Column>
                <div className="row no-gutters align-content-center">
                    <Column classType="icon"><i className="fas fa-book-reader fa-2x"></i></Column>
                    <Column classType="activity-text">You have recently viewed <em>story name goes here!</em>
                    </Column>
                </div>
            </Column>
            <Column classType="right">
                <div className="row no-gutters justify-content-center align-items-center">
                    <div className="view"><button className="btn btn-primary">Resume</button></div>
                    <div className="text-center">5 Days Ago</div>
                </div>
            </Column>
        </div>
    );
}
*/

// export recent activity card
export function HistoryCard(props) {
    return (
        <div className="card" id="recentActivity">
            <div className="card-header">Recent Activity</div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row no-gutters">
                        <Column>
                            <div className="row no-gutters align-content-center">
                                <Column classType="icon"><i className="fas fa-book-reader fa-2x"></i></Column>
                                <Column classType="activity-text">You have recently viewed <em>{
                                    props.value.completedBooks? 
                                    props.value.lastBook.bookTitle:
                                    "None"
                                    }</em>
                                </Column>
                            </div>
                        </Column>
                        <Column classType="right">
                            <div className="row no-gutters justify-content-center align-items-center">
                                <Link to={`/storypage/${props.value.lastBook.bookTitle}`}>
                                <div className="view"><button className="btn btn-primary">Resume</button></div>
                                </Link>
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
                                <Column classType="activity-text">You have recently completed <em>{
                                    props.value.completedBooks? 
                                    props.value.completedBooks[0].title:
                                    "None"
                                    }</em></Column>
                            </div>
                        </Column>
                        <Column classType="right">
                            <div className="row no-gutters justify-content-center align-items-center">
                            <Link to={`/storypage/${props.value.completedBooks[0].title}`}>
                                <div className="view"><button className="btn btn-primary">Again?</button></div>
                                </Link>
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
    return (
        <i className="fas fa-file-signature" data-toggle="tooltip" data-placement="top" data-animation="false" data-html="true"
            title={`<strong>${props.name}:</strong><br /><br />${props.description}`}
            id={props.id}></i>
    )
}
