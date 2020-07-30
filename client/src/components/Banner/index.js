import React from "react";
import { Row, Col, Column } from '../Grid'
import "./style.css";

export function Banner({ children }) {
    return <div className={"cover"}>{children}</div>;
}

export function CTA() {
    return (
        <Row>
            <Column>
                <div className="alert bg-primary text-white"><button className="close"
                    data-dismiss="alert"><span>&times;</span></button>
                    <Row>
                        <Col size="lg">
                            <Row>
                                <div className="col" id="banner-title"><strong>New Stories???</strong></div>
                            </Row>
                            <div className="row my-2">
                                <div className="col small text-white">Check to see if new stories has been created!</div>
                            </div>
                        </Col>
                        <Col size="lg story-btn"><button className="btn btn-secondary" href="/storypage">Story
                            Time!</button></Col>
                    </Row>
                </div>
            </Column>
        </Row>
    );
}