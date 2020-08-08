import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function Footer() {
<<<<<<< HEAD
  return (
    <footer className="site-footer">
      <Container fluid>
        <Row>
          <Col size="12">
            <p className="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by
              <a href="#">Campfire Stories</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
=======

    return (
        <footer className="site-footer">
            <Container fluid>
                <Row>
                    <Col size="12">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by <a href= "/">Campfire Stories</a>. </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
>>>>>>> 559bd978e3c4be2b03cb7f22a87e78b4024f6f08
}

export default Footer;