import React from "react";
import { Banner, CTA, Header } from "../components/Banner";
import { Container, Col, RowMt, Row, Column } from "../components/Grid";
import { UserCard, ConnectCard, HistoryCard } from '../components/Card';
import Navbar from "../components/Navbar";
import store from "store"
// import Timer from "../helpers/AutoLogout"


function Profile () {

    let user = store.get(`user`)

    
    return (
        <div id="main">
            {/* <Timer/> */}
            <Navbar />
            <Banner />
            <Container>
                <div className="row justify-content-center">
                    <div className="col-md" id="left">
                        <UserCard value = { user }/>
                        <ConnectCard value = { user }/>
                    </div>
                    <Col size="md">
                        <RowMt size="4">
                            <Header>
                                <Column>
                                    MY DASHBOARD
                                </Column>
                            </Header>
                        </RowMt>
                        <CTA />
                        <Row>
                            <Column>
                                <HistoryCard value = { user }/>
                            </Column>
                        </Row>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Profile;