import React from "react";
import { Link } from "react-router-dom"
import { RowMt, Col, Column } from "../Grid";
import { isEmpty, lastBookCheckBtn, lastBookCheckName } from "../../../helpers/HelperFunctions";
import ProfileMemoji from '../../ProfileImage/index';
import "./style.css";

// export card whose id is user
export function UserCard(props) {
    // Date user was created
    const createdDate = new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(new Date(props.value.achievements[0].date));

   let editUrl = "/profile/" + props.value._id + "/edit-profile";

    return (
        <div className="card" id="user">
            <div className="card-header">
                Username: {props.value.username}
                <a className="action" href={editUrl}>Edit Profile</a>
            </div>
            <ProfileMemoji />
            <a className="action" data-toggle="modal" href="#memojisModal">
                <div id="userImage">
                    <img src={props.value.profileImage} alt="" />
                </div>
            </a>
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
                                    lastBookCheckName(props.value.lastBook)
                                }</em>
                                </Column>
                            </div>
                        </Column>
                        <Column classType="right">
                            <div className="row no-gutters justify-content-center align-items-center">
                                {lastBookCheckBtn(props.value.lastBook)}
                                <div className="text-center"></div>
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
                                    isEmpty(props.value.completedBooks) === false ?
                                        props.value.completedBooks[0].title :
                                        "None"
                                }</em></Column>
                            </div>
                        </Column>
                        <Column classType="right">
                            <div className="row no-gutters justify-content-center align-items-center">
                                {isEmpty(props.value.completedBooks) === false ?
                                    <Link to={`/storypage/${props.value.completedBooks[0].title}`}>
                                        <div className="view"><button className="btn btn-primary">Again?</button></div>
                                    </Link> :
                                    <div className="view"><button className="btn btn-primary">Again?</button></div>}
                                <div className="text-center"></div>
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
            title={`<strong>${props.name}:</strong><br/><br/>${props.description}`}
            id={props.id}></i>
    )
}

export function ProfileImage(props) {
    return (
        <div>
            <img src={props.src}
                alt={props.alt} />
        </div>
    );
}
