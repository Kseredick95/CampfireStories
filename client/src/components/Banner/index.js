import React from "react";
import { Row, Col, Column, RowMt } from "../Grid";
import "./style.css";
import "./CampFire_Banner.png";

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
                      <Col size="md">
                          <Row>
                              <div className="col" id="banner-title"><strong>New Stories???</strong></div>
                          </Row>
                          <RowMt size="2">
                              <div className="col small text-white">Check to see if new stories has been created!</div>
                          </RowMt>
                      </Col>
                      <div className="col-lg story-btn"><button className="btn btn-secondary" href="/storypage">Story
                          Time!</button></div>
                  </Row>
              </div>
          </Column>
      </Row>
  );
}

export function Header({ children }) {
  return (
    <div className={"font-weight-bold"} id="dashboard">
      {children}
    </div>
  );
}
