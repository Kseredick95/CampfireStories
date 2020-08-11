import React from "react";
import { Row, Col, Column, RowMt } from '../Grid'
import "./style.css";
import { Link } from "react-router-dom";

export function Banner() {
    return (
        <Row fluid>
            <div className={"cover"}>
                <img src={process.env.PUBLIC_URL + '/images/CampFireBanner.png'} alt="campfireBanner" loading="lazy" />
            </div>
        </Row>
    );
}

export function CTA() {
    return (
        <Row>
            <Column>
                <div className="alert bg-primary text-white"><button className="close"
                    data-dismiss="alert"><span>&times;</span></button>
                    <Row>
                        <Col size="md">
                            <Row>
                                <div className="col" id="banner-title"><strong>New Stories???</strong></div>
                            </Row>
                            <RowMt size="2">
                                <div className="col small text-white">Check to see if new stories has been created!</div>
                            </RowMt>
                        </Col>
                        <div className="col-lg story-btn"><Link to="/library"><button className="btn btn-secondary">Story
                            Time!</button></Link></div>
                    </Row>
                </div>
            </Column>
        </Row>
    );
}

export function Header({ children }) {
    return <div className={"font-weight-bold"} id="dashboard">{children}</div>;
}