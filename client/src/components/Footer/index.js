import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function Footer() {
    return (
        <footer className="site-footer">
            <Container fluid>
                <Row>
                    <Col size="12">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by <a href="/">Campfire Stories</a>. </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;