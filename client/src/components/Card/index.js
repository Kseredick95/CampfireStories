import React from "react";
import { RowMt, Col, Column } from "../Grid";
import "./style.css";

// export card whose id is user
export function UserCard() {
    return (
        <div className="card" id="user">
            <div className="card-header">
                Profile ID: 1010012<a className="action" href="/#">Edit Profile</a>
            </div>
            <img id="userImage" alt="" />
            <div className="card-block">
                <h4 className="card-title">Welcome, User</h4>
                <RowMt size="2">
                    <Col size="1">
                        <i className="fas fa-medal"></i>
                    </Col>
                    <Column><strong>Achievments:</strong><br />
                        <div id="medal-list">
                            <i className="fas fa-file-signature" data-toggle="tooltip" data-placement="top"
                                title="Thanks for signing up" id="badge-0"></i>
                            <i className="fas fa-puzzle-piece" data-toggle="tooltip" data-placement="top"
                                title="Completed 1st Story" id="badge-1"></i>
                            <i className="fas fa-bell" data-toggle="tooltip" data-placement="top"
                                title="Completed 2 Stories" id="badge-2"></i>
                            <i className="fas fa-user-graduate" data-toggle="tooltip" data-placement="top"
                                title="Completed All Stories" id="badge-3"></i>
                        </div>
                    </Column>
                </RowMt>
                <RowMt size="2">
                    <Col size="1"><i className="fas fa-envelope"></i></Col>
                    <Column>mail@email.com</Column>
                </RowMt>
                <RowMt size="2">
                    <Column>Joined: 05/10/2010</Column>
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

// export recent activity card

export function HistoryCard() {
    return (
        <div className="card" id="recentActivity">
            <div className="card-header">Recent Activity</div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row no-gutters">
                        <Column>
                            <div className="row no-gutters align-content-center">
                                <Column classType="icon"><i className="fas fa-book-reader fa-2x"></i></Column>
                                <Column>You have recently viewed <em>story name goes here!</em>
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
                </li>
                <li className="list-group-item">
                    <div className="row no-gutters">
                        <Column>
                            <div className="row no-gutters align-content-center">
                                <Column classType="icon"><i className="fas fa-book fa-2x"></i></Column>
                                <Column>You have recently completed <em>story name goes
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