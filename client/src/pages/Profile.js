import React from "react";
import { Banner, CTA, Header } from "../components/Banner";
import { Container, Col, RowMt, Row, Column } from "../components/Grid";
import { UserCard, ConnectCard, HistoryCard } from '../components/Card';
import Navbar from "../components/Navbar";
import APIuser from "../utils/APIuser";

//let userId = window.location.pathname.split("/")[2];

function Profile () {

    function getUser() {
        APIuser.getById({ $where: { _id: window.location.pathname.split("/")[2]}})
        .then(res => {
            console.log(res.data[0])
            let user = res.data[0]
            
        })
    }

    getUser();
    
    return (
        <div>
            <Navbar />
            <Banner />
            <Container>
                <div className="row justify-content-center">
                    <div className="col-md" id="left">
                        <UserCard />
                        <ConnectCard />
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
                                <HistoryCard />
                            </Column>
                        </Row>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Profile;